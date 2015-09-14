import lessVars from '!!less-interop-loader!./App.less'

import React from 'react';
import {
  Jumbotron
} from 'react-bootstrap';

export default class Header extends React.Component {
  render() {
    return (
      <Jumbotron>
        <div
          className="container"
          style={{
            paddingTop: lessVars.marginBetweenItems,
            paddingBottom: lessVars.marginBetweenItems * 1.5}}>
          {this.props.children}
        </div>
      </Jumbotron>
    )
  }
}
