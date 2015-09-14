import HttpsLink from './HttpsLink';
import HttpsLinkInParens from './HttpsLinkInParens';
import lessVars from '!!less-interop-loader!./App.less'

import React from 'react';

export default class Item extends React.Component {
  render() {
    const {location, link, title, period} = this.props;
    return (
      <div style={{marginBottom: lessVars.marginBetweenItems}}>
        <h3>
          <b>{title}</b>
          {location && ', '}
          {location}
          {link && <HttpsLinkInParens href={link} />}
          <span className="pull-right"><i>{period}</i></span>
        </h3>
        {this.props.children}
      </div>
    );
  }
}
