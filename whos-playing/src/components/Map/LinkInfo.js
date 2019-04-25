import React, { PureComponent } from 'react';

export default class LinkInfo extends PureComponent {

  render() {
    const { info } = this.props;
    const displayName = `${info.name}`;

    return (
      <div>
        <div>{displayName}</div>
      </div>
    )

  }
}
