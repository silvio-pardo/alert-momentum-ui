# alert-momentum-ui

> alert widget for cisco momentum-ui

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save alert-momentum-ui
```

## Usage

```tsx
import React from 'react';
import { AlertBox} from 'alert-momentum-ui';

class Example extends Component {
  render() {
    return <AlertBox />
  }
}
```

```tsx
// use the method for fire an alert box
import { AlertSuccess, AlertData } from 'alert-momentum-ui';
AlertSuccess({ title: 'Example', message: 'example message'} as AlertData);
```
## License

MIT © [silvio-pardo](https://github.com/silvio-pardo)
