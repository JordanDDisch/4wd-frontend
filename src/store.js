import { combineReducers, createStore } from 'redux';
import concatenateReducers from 'redux-concatenate-reducers';

import { enhancer, reducers } from '@magento/peregrine';

import storeSelectorReducer from '@supacentrePwa/components/StoreSelectorModal/store';

// This is the connective layer between the Peregrine store and the
// venia-concept UI. You can add your own reducers/enhancers here and combine
// them with the Peregrine exports.
//
// example:
// const rootReducer = combineReducers({ ...reducers, ...myReducers });
// const rootEnhancer = composeEnhancers(enhancer, myEnhancer);
// export default createStore(rootReducer, rootEnhancer);

const app = reducers.app;

const appReducer = concatenateReducers([storeSelectorReducer, app]);

const rootReducer = combineReducers({ ...reducers, app: appReducer });

export default createStore(rootReducer, enhancer);
