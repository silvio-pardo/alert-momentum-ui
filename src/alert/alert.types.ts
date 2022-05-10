import { v4 as uuidv4 } from 'uuid';
export type AlertData = {
  title: string;
  message: string;
};
export type AlertItem = {
  itemKey: uuidv4;
  isDisplayed: boolean;
  type: string;
  data: AlertData;
};
