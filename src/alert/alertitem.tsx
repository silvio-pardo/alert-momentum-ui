import * as React from 'react';
import { AlertItem } from './alert.types';
import { Alert } from '@momentum-ui/react';
export interface AlertItemProps {
  data: AlertItem;
  close: Function;
}
export class AlertItemRow extends React.Component<AlertItemProps> {
  timeout: NodeJS.Timeout;
  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  startTimer = () => {
    this.timeout = setTimeout(() => this.props.close(this.props.data), 3000);
  };

  render() {
    return (
      <Alert
        closable
        title={this.props.data.data.title}
        message={this.props.data.data.message}
        dismissBtnProps={{
          onClick: () => {
            this.props.close(this.props.data);
          },
          ariaLabel: 'Close',
        }}
        show={this.props.data.isDisplayed}
        type={this.props.data.type}
      />
    );
  }
}
