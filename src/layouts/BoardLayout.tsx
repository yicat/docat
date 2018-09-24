import * as React from 'react';

import * as cls from './BoardLayout.module.less';

interface IProps {
  onClick: () => void;
}

export default class BoardLayout extends React.Component<IProps> {
  render () {
    return <div className={cls.board} onClick={this.props.onClick}>{this.props.children}</div>;
  }
}
