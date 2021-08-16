import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { createMockClient } from 'mock-apollo-client';

/**
 * From https://stackoverflow.com/a/61861247/6175643
 */
export const withApolloProvider = ({ requestMockHandlers }) => {
    const mockClient = createMockClient();
    requestMockHandlers.mutations.forEach(mockHandler => {
        mockClient.setRequestHandler(mockHandler.type, mockHandler.handler);
    });
    requestMockHandlers.queries.forEach(mockHandler => {
        mockClient.setRequestHandler(mockHandler.type, mockHandler.handler);
    });
    return storyFn => {
        return <ApolloProvider client={mockClient}>{storyFn()}</ApolloProvider>;
    };
};
