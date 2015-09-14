import lessVars from '!!less-interop-loader!./App.less'

import React from 'react';
import {
  Jumbotron
} from 'react-bootstrap';

export default class Section extends React.Component {
  render() {
    return (
      <Jumbotron {...this.props}>
        <div className="container">
          <h2>{this.props.title}</h2>
          {this.props.children}
        </div>
      </Jumbotron>
    );
  }
}
