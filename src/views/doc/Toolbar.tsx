import * as React from 'react';

import * as cls from './Toolbar.module.less';

interface IProps { }

export default class Toolbar extends React.Component<IProps> {
  render () {
    return (
      <div className={cls.container}><div className={cls.toolbar}>Toolbar</div></div>
    );
  }
}
