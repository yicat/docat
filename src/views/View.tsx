import * as React from 'react';
import { Switch, Route } from 'react-router';

import { BasicLayout } from 'src/layouts';
import Side from './Side';
import routes from './route';

interface IProps {}

export default class extends React.Component<IProps> {
  render () {
    return (
      <BasicLayout>
        <Side width={120} gap={20} />
        <Switch>
          {routes.map((route, i) => (
            <Route exact={true} path={route.path} component={route.component} />
          ))}
        </Switch>
      </BasicLayout>
    );
  }
}
