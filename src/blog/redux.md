# Redux

Redux is a state mangement tool or library, lets call it a library. It is used to manage the data you use in your app, the data that renderes the views.

Let's walk through a basic setup for an existing project. For this project we will pull data from a WordPress REST API (fun).

## Setup

```txt
yarn add react-redux redux redux-logger redux-thunk redux-freeze
```

## :TODO
1. create a store
2. creat a root reducer
3. create a posts reducer
4. 

Before we go ahead and start building lets take a look at the required folder structure for this architecture pattern.

## Folder structure and required files

```txt
---src/
-----redux/
      reducers/
        posts.ts
      rootReducer.ts
      store.ts
```

Create a folder called redux, and in it a file store.js

### store.js

```ts
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import freeze from 'redux-freeze';
import _ from 'lodash';
import rootReducer from './rootReducer';

const logger = createLogger();
const middlewares = _.compact([thunk, freeze, logger]);
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;
```

Here we are importing two methods from redux itself and importing three redux middle ware, lodash and a rootReducer.

- create a logger, logs all the redux messages to console.
- create middlewares
- create store with middle and 
- finally create an actual store and 
- export the store