require('dotenv').config();
const config = {};

config.oAuthClientID = process.env.GOOGLE_CLIENT_ID; // The OAuth client ID from the Google Developers console.
config.oAuthclientSecret = process.env.GOOGLE_CLIENT_SECRET; // The OAuth client secret from the Google Developers console.
config.oAuthCallbackUrl = 'http://127.0.0.1:3000/auth/google/callback'; // The callback to use for OAuth requests. This is the URL where the app is running. For testing and running it locally, use 127.0.0.1.
config.port = 3000; // The port where the app should listen for requests.
config.scopes = [ // The scopes to request. The app requires the photos library.readonly and plus.me scopes.
  'https://www.googleapis.com/auth/photoslibrary.readonly',
  'profile',
];
config.photosToLoad = 150; // The number of photos to load for search requests.
config.searchPageSize = 100; // The page size to use for search requests. 100 is reccommended.
config.albumPageSize = 50; // The page size to use for the listing albums request. 50 is reccommended.
config.apiEndpoint = 'https://photoslibrary.googleapis.com'; // The API end point to use. Do not change.

export default config;
