import * as React from 'react';
import { Switch, Route } from 'react-router';

import { BasicLayout } from 'src/layouts';
import routes from './route';

interface IProps { }

export default class extends React.Component<IProps> {
  render () {
    return (
      <BasicLayout>
        <Switch>
          {routes.map((route, i) => (
            <Route exact={true} path={route.path} component={route.component} />
          ))}
        </Switch>
      </BasicLayout>
    );
  }
}
