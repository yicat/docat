import * as React from 'react';

import * as cls from './Side.module.less';

interface IProps { width: number; }

export default class extends React.Component<IProps> {
  render () {
    const { width } = this.props;

    return (
      <div className={cls.side} style={{ width }}>
        <div className={cls.board}>
          <div>文档中心</div>
          <div>Doc A</div>
          <div>Doc B</div>
          <div>Doc C</div>
        </div>
        <div className={cls.board}>
          <div>草稿 A</div>
          <div>草稿 B</div>
          <div>草稿</div>
          <div>草稿</div>
          <div>草稿</div>
        </div>
      </div>
    );
  }
}
