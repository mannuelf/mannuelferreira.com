import React, { Component } from 'react';
import {gapi} from 'gapi-script';
import {loadAuth2, loadAuth2WithProps} from 'gapi-script';

class GooglePhotos extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    console.log("componentDidMount")
  }

  async componentDidUpdate() {
    console.log("componentDidUpdate")
  }

}

export default GooglePhotos;
