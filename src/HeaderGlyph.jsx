import React from 'react';
import {
  Glyphicon
} from 'react-bootstrap';

export default class HeaderGlyph extends React.Component {
  render() {
    return (
      <Glyphicon
        {...this.props}
        style={{
          fontSize: '75%',
          margin: '0 5px 0 20px',
          top: 0.5}} />
    );
  }
}
