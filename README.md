# alert-momentum-ui

> alert widget for cisco momentum-ui

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![npm version](https://badge.fury.io/js/alert-momentum-ui.svg)](https://badge.fury.io/js/alert-momentum-ui)

## Install

```bash
npm install --save alert-momentum-ui
```

## Usage

```tsx
import React from 'react';
import { AlertBox } from 'alert-momentum-ui';
//important: declare the box at root level of the app!
export default function App() {
  return (
      <div className="App">
        <AlertBox></AlertBox>
        <div>
          <InnerPage></InnerPage>
        </div>
      <div>);
}
```

```tsx
// method for fire an alert box
import React from 'react';
import { Button } from "@momentum-ui/react";
import { AlertSuccess, AlertData } from 'alert-momentum-ui';

export default function InnerPage() {
  return (
    <div>
      <Button
        children="Show Alert"
        onClick={() => {
          AlertSuccess({
            title: "Example",
            message: "example message"
          } as AlertData);
        }}
        color="blue"/>
    <div>);
}
```
## Demo
[go to demo!](https://codesandbox.io/embed/webex-react-ui-forked-tbkq4j?autoresize=1&fontsize=14&hidenavigation=1&theme=dark)

note: in the demo @momentum-ui/icons is not present.
## License

MIT © [silvio-pardo](https://github.com/silvio-pardo)
