import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { RetryLink } from 'apollo-link-retry';

import { Util } from '@magento/peregrine';
import { Adapter } from '@magento/venia-drivers';
import store from './store';
import app from '@magento/peregrine/lib/store/actions/app';
import App, { AppContextProvider } from '@magento/venia-ui/lib/components/App';

import { listenersGTM4WD } from './listener/GTMEventHandler';
import { registerSW } from './registerSW';
import '@supacentrePwa/index.css';
import '@supacentrePwa/styles/main.scss';
import ProductPurchasePopup from '@supacentrePwa/components/ProductPurchasePopup';
import './index.css';

listenersGTM4WD();

/**
 * List of queries that Magento can cache
 */
const CACHEABLE_QUERIES = [
    'category',
    'categoryList',
    'cmsBlocks',
    'cmsPage',
    'products',
    'urlResolver'
];

const { BrowserPersistence } = Util;
const apiBase = new URL('/graphql', __MAGENTO_BE_URL__).toString();

/**
 * The Venia adapter provides basic context objects: a router, a store, a
 * GraphQL client, and some common functions.
 */

// The Venia adapter is not opinionated about auth.
const authLink = setContext((graphQLRequest, { headers }) => {
    // get the authentication token from local storage if it exists.
    const storage = new BrowserPersistence();
    const token = storage.getItem('signin_token');
    const canCacheRequest = CACHEABLE_QUERIES.includes(
        graphQLRequest.operationName
    );

    // The authorization token should only be set on non-cacheable queries
    const shouldIncludeToken = token && !canCacheRequest;

    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            ...(shouldIncludeToken && { authorization: `Bearer ${token}` }),
            Store: __STORE_CODE__
        }
    };
});

// @see https://www.apollographql.com/docs/link/composition/.
const apolloLink = ApolloLink.from([
    // by default, RetryLink will retry an operation five (5) times.
    new RetryLink(),
    authLink,
    // An apollo-link-http Link
    Adapter.apolloLink(apiBase)
]);

ReactDOM.render(
    <Adapter apiBase={apiBase} apollo={{ link: apolloLink }} store={store}>
        <AppContextProvider>
            <App />
            <ProductPurchasePopup display="1" />
        </AppContextProvider>
    </Adapter>,
    document.getElementById('root')
);

registerSW();

window.addEventListener('online', () => {
    store.dispatch(app.setOnline());
});
window.addEventListener('offline', () => {
    store.dispatch(app.setOffline());
});

if (module.hot) {
    // When any of the dependencies to this entry file change we should hot reload.
    module.hot.accept();
}
