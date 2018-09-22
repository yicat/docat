import * as React from 'react';
import { Redirect } from 'react-router-dom';

interface IProps {}

export default class Home extends React.Component<IProps> {
  render () {
    return <Redirect to="/doc" />;
  }
}
