import * as React from 'react';

import * as cls from './BasicLayout.module.less';
import { Topbar, Sidebar } from 'src/suites';

interface IProps { }
interface IState {
  width: number;
}

export default class extends React.Component<IProps, IState> {
  constructor (props: IProps) {
    super(props);
    this.state = { width: this.calcWidth() };
  }

  componentDidMount () {
    window.onresize = () => {
      this.setState({ width: this.calcWidth() });
    };
  }

  calcWidth () {
    return window.innerWidth > 1000 ? 1000 : window.innerWidth * 0.9;
  }

  render () {
    const { width } = this.state;

    return (
      <div className={cls.layout}>
        <Topbar width={width} />
        <div className={cls.main}>
          <Sidebar width={240} />
          <div className={cls.viewWrapper} style={{ width: width - 240 - 20 }}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
