import React, { Component } from 'react';

import Headline from '../components/Headline';

export default class App1Container extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Headline>
              YO!
            </Headline>
          </div>
        </div>
      </div>
    );
  }
}
