import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import MagentoRoute from '@magento/venia-ui/lib/components/MagentoRoute';
import Main from '@magento/venia-ui/lib/components/Main';
import Routes from './../Routes';
import { createTestInstance } from '@magento/peregrine';

jest.mock(
    '@magento/venia-ui/lib/components/MagentoRoute',
    () => 'MagentoRoute'
);
jest.mock('@magento/venia-ui/lib/components/Main', () => 'Main');

describe('Routes', () => {
    it('Renders the main route successfully', () => {
        const { root } = createTestInstance(
            <BrowserRouter>
                <Routes hasOverlay={false} />
            </BrowserRouter>
        );

        const props = {
            isMasked: false
        };

        expect(root.findByType(Main).props).toMatchObject(props);
        expect(root.findByType(MagentoRoute).props).toMatchObject({});
    });
});
