import React from 'react';

export default class HttpsLink extends React.Component {
  render() {
    const {href} = this.props;
    return (
      <a href={'https://' + href}>{href}</a>
    )
  }
}
