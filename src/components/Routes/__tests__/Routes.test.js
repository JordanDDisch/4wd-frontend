import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import MagentoRoute from '@magento/venia-ui/lib/components/MagentoRoute';
import Routes from './../Routes';
import { createTestInstance } from '@magento/peregrine';

jest.mock(
    '@magento/venia-ui/lib/components/MagentoRoute',
    () => 'MagentoRoute'
);

jest.mock('@magento/venia-ui/lib/components/Main', () => {
    return ({ children }) => {
        return <div data-testid="Main">{children}</div>;
    };
});

describe('Routes', () => {
    it('Renders the main route successfully', () => {
        const { root } = createTestInstance(
            <BrowserRouter>
                <Routes hasOverlay={false} />
            </BrowserRouter>
        );

        expect(root.findByType(MagentoRoute).props).toMatchObject({});
    });
});
