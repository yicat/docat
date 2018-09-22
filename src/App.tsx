import * as React from 'react';
import { Provider } from 'mobx-react';
import { Router, Route } from 'react-router-dom';

import View from 'src/views';
import rootStore from 'src/stores';

export default class App extends React.Component {
  public render () {
    return (
      <Provider store={rootStore}>
        <Router history={rootStore.router.history}>
          <Route path="/" component={View} />
        </Router>
      </Provider>
    );
  }
}
