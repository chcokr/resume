import React from 'react';
import {
  Jumbotron
} from 'react-bootstrap';

export default class Footer extends React.Component {
  render() {
    return (
      <Jumbotron>
        <div className="container">
          <span className="pull-right">
            <small><i>{this.props.children}</i></small>
          </span>
        </div>
      </Jumbotron>
    )
  }
}
