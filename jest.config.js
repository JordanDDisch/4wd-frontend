module.exports = {
    browser: true,
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            'supacentre-pwa/__mocks__/fileMock.js',
        '\\.(css|less|scss)$': 'identity-obj-proxy'
    },
    moduleFileExtensions: ['ee.js', 'ce.js', 'js', 'json', 'jsx', 'node'],
    setupFiles: ['supacentre-pwa/cli/throw-on-prop-type-error.js'],
    transformIgnorePatterns: [
        '/node_modules/(?!@magento|supacentre-react|@aligent|supacentre-pwa).+\\.js$'
    ],
    transform: {
        // Reproduce the Webpack `graphql-tag/loader` that lets Venia
        // import `.graphql` files into JS.
        '\\.(gql|graphql)$': 'jest-transform-graphql',
        // Use the default babel-jest for everything else.
        '\\.(js|jsx|css)$': 'babel-jest'
    },
    globals: {
        UNION_AND_INTERFACE_TYPES: {
            __schema: {
                types: [
                    {
                        kind: 'INTERFACE',
                        name: 'ProductInterface',
                        possibleTypes: [
                            { name: 'VirtualProduct' },
                            { name: 'SimpleProduct' },
                            { name: 'DownloadableProduct' },
                            { name: 'BundleProduct' },
                            { name: 'GiftCardProduct' },
                            { name: 'GroupedProduct' },
                            { name: 'ConfigurableProduct' }
                        ]
                    },
                    {
                        kind: 'INTERFACE',
                        name: 'MediaGalleryInterface',
                        possibleTypes: [
                            { name: 'ProductImage' },
                            { name: 'ProductVideo' }
                        ]
                    },
                    {
                        kind: 'INTERFACE',
                        name: 'ProductLinksInterface',
                        possibleTypes: [{ name: 'ProductLinks' }]
                    },
                    {
                        kind: 'INTERFACE',
                        name: 'CategoryInterface',
                        possibleTypes: [{ name: 'CategoryTree' }]
                    },
                    {
                        kind: 'INTERFACE',
                        name: 'LayerFilterItemInterface',
                        possibleTypes: [
                            { name: 'LayerFilterItem' },
                            { name: 'SwatchLayerFilterItem' }
                        ]
                    },
                    {
                        kind: 'INTERFACE',
                        name: 'PhysicalProductInterface',
                        possibleTypes: [
                            { name: 'SimpleProduct' },
                            { name: 'BundleProduct' },
                            { name: 'GiftCardProduct' },
                            { name: 'GroupedProduct' },
                            { name: 'ConfigurableProduct' }
                        ]
                    },
                    {
                        kind: 'INTERFACE',
                        name: 'CustomizableOptionInterface',
                        possibleTypes: [
                            { name: 'CustomizableAreaOption' },
                            { name: 'CustomizableDateOption' },
                            { name: 'CustomizableDropDownOption' },
                            { name: 'CustomizableMultipleOption' },
                            { name: 'CustomizableFieldOption' },
                            { name: 'CustomizableFileOption' },
                            { name: 'CustomizableRadioOption' },
                            { name: 'CustomizableCheckboxOption' }
                        ]
                    },
                    {
                        kind: 'INTERFACE',
                        name: 'CustomizableProductInterface',
                        possibleTypes: [
                            { name: 'VirtualProduct' },
                            { name: 'SimpleProduct' },
                            { name: 'DownloadableProduct' },
                            { name: 'BundleProduct' },
                            { name: 'GiftCardProduct' },
                            { name: 'ConfigurableProduct' }
                        ]
                    },
                    {
                        kind: 'INTERFACE',
                        name: 'CartItemInterface',
                        possibleTypes: [
                            { name: 'SimpleCartItem' },
                            { name: 'VirtualCartItem' },
                            { name: 'ConfigurableCartItem' }
                        ]
                    },
                    {
                        kind: 'INTERFACE',
                        name: 'CartAddressInterface',
                        possibleTypes: [
                            { name: 'ShippingCartAddress' },
                            { name: 'BillingCartAddress' }
                        ]
                    },
                    {
                        kind: 'INTERFACE',
                        name: 'SwatchLayerFilterItemInterface',
                        possibleTypes: [{ name: 'SwatchLayerFilterItem' }]
                    }
                ]
            }
        },
        STORE_NAME: 'Venia',
        TITLE_NAME: 'Venia',
        __GOOGLE_PLACES_API_KEY__: '',
        __STORE_CODE__: 'supacentre'
    }
};
