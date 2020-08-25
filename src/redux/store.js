/** @format */

import { applyMiddleware, createStore } from 'redux';
import combineReducers from '@redux/reducer.js';
import thunk from 'redux-thunk';

const middleware = [thunk];
const store = createStore(combineReducers, applyMiddleware(...middleware));

if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('@redux/reducer.js', () => {
        // eslint-disable-next-line global-require
        const nextCombineReducers = require('@redux/reducer.js').default;
        store.replaceReducer(nextCombineReducers);
    });
}

export default store;
