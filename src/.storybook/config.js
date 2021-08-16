import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import Adapter from '@magento/venia-ui/lib/drivers/adapter';
import store from '../store';
import '../index.css';
import { PeregrineContextProvider } from '@magento/peregrine';

function loadStories() {
    const context = require.context('../', true, /__stories__\/.+\.js$/);
    context.keys().forEach(context);
}

const backendUrl = process.env.MAGENTO_BACKEND_URL;
const apiBase = new URL('/graphql', backendUrl).toString();

const apolloAdapter = storyFn => {
    return (
        <Adapter
            apiBase={apiBase}
            apollo={{ link: Adapter.apolloLink(apiBase) }}
            store={store}
        >
            <PeregrineContextProvider>{storyFn()}</PeregrineContextProvider>
        </Adapter>
    );
};

addDecorator(apolloAdapter);

configure(loadStories, module);
