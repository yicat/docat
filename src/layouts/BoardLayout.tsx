import * as React from 'react';

import * as cls from './BoardLayout.module.less';

interface IProps {}

export default class BoardLayout extends React.Component<IProps> {
  render () {
    return <div className={cls.board}>{this.props.children}</div>;
  }
}
