import * as React from 'react';
import { AlertContainer } from '@momentum-ui/react';
import { AlertData, AlertItem } from './alert.types';
import { BehaviorSubject, Subscription } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { AlertItemRow } from './alertitem';
import './alert.css';

// event for show box
export const AlertError: Function = (value: AlertData) =>
  SetAlert(value, 'error');
export const AlertWarning: Function = (value: AlertData) =>
  SetAlert(value, 'warning');
export const AlertInfo: Function = (value: AlertData) =>
  SetAlert(value, 'info');
export const AlertSuccess: Function = (value: AlertData) =>
  SetAlert(value, 'success');
const SetAlert: Function = (value: AlertData, type: string) => {
  FireAlert.next({
    itemKey: uuidv4(),
    data: value,
    isDisplayed: true,
    type: type,
  } as AlertItem);
};
const FireAlert = new BehaviorSubject<AlertItem>({} as AlertItem);
// global subscription to avoid infinite subscribe
let currentSubscriptionAlert: Subscription;
export const AlertBox: React.FC = () => {
  const [statusComponent, setComponent] = React.useState([] as AlertItem[]);
  const updateAction = (row: AlertItem) => {
    const finded = statusComponent.find((elem) => elem.itemKey === row.itemKey);
    if (finded !== undefined) {
      const tempList = statusComponent.filter((temp) => {
        if (temp.itemKey !== row.itemKey) {
          return temp;
        }
      });
      setComponent([...tempList]);
    }
  };
  // subscription services
  if (currentSubscriptionAlert === undefined) {
    currentSubscriptionAlert = FireAlert.subscribe((next) => {
      if (next.isDisplayed) {
        setComponent((prevList) => [...prevList, next]);
      }
    });
  }
  // render
  return (
    <AlertContainer>
      {statusComponent.map((row, index) => {
        return (
          <AlertItemRow key={row.itemKey} data={row} close={updateAction} />
        );
      })}
    </AlertContainer>
  );
};
