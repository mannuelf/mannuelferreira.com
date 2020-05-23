import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import freeze from 'redux-freeze';
import _ from 'lodash';
import rootReducer from './rootReducer';
import {composeWithDevTools} from "redux-devtools-extension";

const logger = createLogger();
const middleWares = _.compact([thunk, freeze, logger]);
const createStoreWithMiddleware = applyMiddleware(...middleWares)(createStore);

let store: Store<any, AnyAction> & { dispatch: unknown };

store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middleWares),
  // other store enhancers if any
));
export default store;
