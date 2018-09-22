import * as React from 'react';

import * as cls from './Side.module.less';

interface IProps {
  width: number;
  gap: number;
}

export default class extends React.Component<IProps> {
  render () {
    const { width, gap } = this.props;

    return (
      <div className={cls.side} style={{ width, marginRight: gap }}>
        <div>Doc</div>
      </div>
    );
  }
}
