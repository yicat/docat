import * as React from 'react';

import { BoardLayout } from 'src/layouts';

interface IProps {}

export default class Doc extends React.Component<IProps> {
  render () {
    return <BoardLayout />;
  }
}
