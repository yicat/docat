import * as React from 'react';

import * as cls from './BasicLayout.module.less';

const styls = {
  topbar: {
    width: window.innerWidth > 1200 ? 1200 : '85%',
  },
  view: {
    width: window.innerWidth > 1200 ? 1200 : '85%',
  },
};

interface IProps {}

export default class extends React.Component<IProps> {
  render () {
    return (
      <div className={cls.layout}>
        <div className={cls.topbar}>
          <div style={styls.topbar}>
            <span className={cls.logo}>Docat</span>
          </div>
        </div>
        <div className={cls.viewWrapper}>
          <div className={cls.view} style={styls.view}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
