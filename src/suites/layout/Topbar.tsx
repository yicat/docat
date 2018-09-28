import * as React from 'react';

import * as cls from './Topbar.module.less';

interface IProps { width: number; }

export default class Topbar extends React.PureComponent<IProps> {
  render () {
    const { width } = this.props;
    return (
      <div className={cls.topbar}>
        <div style={{ width }}>
          <span className={cls.logo}>Docat</span>
        </div>
      </div>);
  }
}