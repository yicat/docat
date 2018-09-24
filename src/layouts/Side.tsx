import * as React from 'react';

import * as cls from './Side.module.less';

interface IProps { width: number; }

export default class extends React.Component<IProps> {
  render () {
    const { width } = this.props;

    return (
      <div className={cls.side} style={{ width }}>
        <div>Doc</div>
      </div>
    );
  }
}
