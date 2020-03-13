import React, { Component } from 'react';

class GooglePhotos extends Component<any> {
  render() {
    function authenticate() {
      return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/photoslibrary https://www.googleapis.com/auth/photoslibrary.readonly https://www.googleapis.com/auth/photoslibrary.readonly.appcreateddata"})
        .then(function () {
            console.log("Sign-in successful");
          },
          function (err) {
            console.error("Error signing in", err);
          });
    }

    function loadClient() {
      gapi.client.setApiKey("YOUR_API_KEY");
      return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/photoslibrary/v1/rest")
        .then(function () {
            console.log("GAPI client loaded for API");
          },
          function (err) {
            console.error("Error loading GAPI client for API", err);
          });
    }

    // Make sure the client is loaded and sign-in is complete before calling this method.
    function execute() {
      return gapi.client.photoslibrary.albums.get({
        "albumId": `${process.env.REACT_APP_GOOGLE_ALBUM_ID}`,
        "access_token": `${process.env.REACT_APP_GOOGLE_CLIENT_SECRET}`
      })
        .then(function (response) {
            // Handle the results here (response.result has the parsed body).
            console.log("Response", response);
          },
          function (err) {
            console.error("Execute error", err);
          });
    }

    gapi.load("client:auth2", function () {
      gapi.auth2.init({client_id: `${process.env.REACT_APP_GOOGLE_CLIENT_ID}`});
    });

    // @ts-ignore
    return(
      <div>
        <button onClick="authenticate().then(loadClient)">authorize and load</button>
        <button onClick="execute()">execute</button>
      </div>
    )
  }
}

export default GooglePhotos;
