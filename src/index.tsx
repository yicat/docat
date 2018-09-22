import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'rsuite/styles/less/index.less';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
