import { combineReducers } from 'redux';
import { userReducer } from './user/userReducer.js';
import { dataReducer } from './data/dataReducer';
// import { appReducer } from './app/appReducer.js';
// import { testReducer } from './test/testReducer.js';
import { NameSpace } from "./nameSpace.js";

export const rootReducer = combineReducers({
  [NameSpace.DATA]: dataReducer,
  [NameSpace.USER]: userReducer,
  // [NameSpace.APP]: appReducer,
  // [NameSpace.TEST]: testReducer,
});