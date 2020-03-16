import React, {Component} from 'react';
import config from '../../config/GooglePhotos';
import {gapi} from 'gapi-script';
import {loadAuth2, loadAuth2WithProps} from 'gapi-script';

class GooglePhotos extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    this.initGapiClient();
    console.log("componentDidMount");
  }

  async componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  initGapiClient = () => {
    console.log("hello");
  };

  render() {
    return(
      <div>{this.state}</div>
    )
  }
}

export default GooglePhotos;
