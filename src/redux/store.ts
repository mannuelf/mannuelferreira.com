import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import freeze from 'redux-freeze';
import _ from 'lodash';
import rootReducer from './rootReducer';

const logger = createLogger();
const middleWares = _.compact([thunk, freeze, logger]);
const createStoreWithMiddleware = applyMiddleware(...middleWares)(createStore);
let store: Store<any, AnyAction> & { dispatch: unknown };
store = createStoreWithMiddleware(rootReducer);

export default store;
