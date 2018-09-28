import * as React from 'react';

import * as cls from './ViewLayout.module.less';

interface IProps {
  onClick: () => void;
}

export default class ViewLayout extends React.Component<IProps> {
  render () {
    return <div className={cls.view} onClick={this.props.onClick}>{this.props.children}</div>;
  }
}
