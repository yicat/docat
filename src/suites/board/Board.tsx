import * as React from 'react';

import * as cls from './Board.module.less';

interface IProps { style?: any; }

export default class Board extends React.PureComponent<IProps> {
  render () {
    const { children, style } = this.props;
    return (
      <div className={cls.board} style={style}>{children}</div>
    );
  }
}
