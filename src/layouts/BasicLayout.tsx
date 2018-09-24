import * as React from 'react';

import * as cls from './BasicLayout.module.less';
import Side from './Side';

interface IProps { }
interface IState {
  width: number;
}

export default class extends React.Component<IProps, IState> {
  constructor (props: IProps) {
    super(props);
    this.state = { width: window.innerWidth > 1000 ? 1000 : window.innerWidth * 0.85 };
  }

  componentDidMount () {
    window.onresize = () => {
      this.setState({ width: window.innerWidth > 1000 ? 1000 : window.innerWidth * 0.8 });
    };
  }

  render () {
    const sideWidth = (window.innerWidth - this.state.width) / 2;
    const viewWidth = this.state.width - 200;

    return (
      <div className={cls.layout}>
        <div className={cls.topbar}>
          <div style={{ width: this.state.width }}>
            <span className={cls.logo}>Docat</span>
          </div>
        </div>
        <div className={cls.mainSection}>
          <div className={cls.sideSection}>
            <div style={{ marginLeft: sideWidth }}>
              <Side width={200} />
            </div>
          </div>
          <div className={cls.viewSection}>
            <div style={{ width: viewWidth, marginRight: sideWidth }}>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
