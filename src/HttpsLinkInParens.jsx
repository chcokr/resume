import HttpsLink from './HttpsLink';
import lessVars from '!!less-interop!./App.less';

import React from 'react';

export default class HttpsLinkInParens extends React.Component {
  render() {
    const {href} = this.props;

    return (
      <small>
        &nbsp;
        <span style={{color: lessVars.textColor}}>(</span>
        <HttpsLink href={href} />
        <span style={{color: lessVars.textColor}}>)</span>
      </small>
    );
  }
}
