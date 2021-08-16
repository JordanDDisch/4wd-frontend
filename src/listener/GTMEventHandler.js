export const listenersGTM4WD = () => {
    /* NewsLetter Subscription Event Handler */

    const newsLetterSubscriptionHandler = e => {
        dataLayer.push({ page: { type: 'subscribe' } });
        dataLayer.push({ newsletter: { status: 1, email: e.detail.email } });
    };

    document.removeEventListener(
        'NewsLetterSubscription',
        newsLetterSubscriptionHandler
    );

    document.addEventListener(
        'NewsLetterSubscription',
        newsLetterSubscriptionHandler,
        false
    );

    /* Category - Category View */
    const categoryOpenHandler = e => {
        dataLayer.push({ page: { type: 'category' } });
        dataLayer.push({
            category: {
                id: e.detail.id,
                name: e.detail.name
            }
        });
        dataLayer.push({
            category: {
                productIds: e.detail.productIds,
                skus: e.detail.skus
            }
        });
        window.google_tag_params = {
            ecomm_prodid: [e.detail.productIdSku],
            ecomm_pagetype: 'category',
            ecomm_totalvalue: e.detail.totalValue
        };
    };
    document.removeEventListener('categoryopen', categoryOpenHandler);
    document.addEventListener('categoryopen', categoryOpenHandler, false);

    /* PDP Page Load- Simple Product */

    const pdpSimpleProductHandler = e => {
        dataLayer.push({ page: { type: 'product' } });

        dataLayer.push({
            product: {
                id: e.detail.id,
                sku: e.detail.sku,
                name: e.detail.name,
                price: e.detail.price
            }
        });

        window.google_tag_params = {
            ecomm_prodid: [e.detail.sku],
            ecomm_pagetype: 'product',
            ecomm_totalvalue: e.detail.price
        };
    };

    document.removeEventListener(
        'PDPSimpleProductPageLoad',
        pdpSimpleProductHandler
    );

    document.addEventListener(
        'PDPSimpleProductPageLoad',
        pdpSimpleProductHandler,
        false
    );

    /* PDP Page Load- Bundle Product */

    const pdpBundleProductHandler = e => {
        dataLayer.push({ page: { type: 'product' } });

        dataLayer.push({
            product: {
                id: e.detail.id,
                sku: e.detail.sku,
                name: e.detail.name,
                price: e.detail.price
            }
        });
    };

    document.removeEventListener(
        'PDPBundleProductPageLoad',
        pdpBundleProductHandler
    );

    document.addEventListener(
        'PDPBundleProductPageLoad',
        pdpBundleProductHandler,
        false
    );

    /* PDP Page Load- Simple Related Product */

    const pdpSimpleRelatedProductHandler = e => {
        const productIdStringList = JSON.parse(e.detail.productIds).map(
            element => {
                return element.toString();
            }
        );

        const skuStringList = JSON.parse(e.detail.skus);

        dataLayer.push({
            related: {
                productId: e.detail.id,
                sku: e.detail.sku,
                productIds: productIdStringList,
                skus: skuStringList
            }
        });
    };

    document.removeEventListener(
        'pdpSimpleRelatedProductLoad',
        pdpSimpleRelatedProductHandler
    );

    document.addEventListener(
        'pdpSimpleRelatedProductLoad',
        pdpSimpleRelatedProductHandler,
        false
    );

    /* PDP Page Load- Bundled Related Product */

    const pdpBundleRelatedProductHandler = e => {
        const productIdStringList = JSON.parse(e.detail.productIds).map(
            element => {
                return element.toString();
            }
        );

        const skuStringList = JSON.parse(e.detail.skus);

        dataLayer.push({
            related: {
                productId: e.detail.id,
                sku: e.detail.sku,
                productIds: productIdStringList,
                skus: skuStringList
            }
        });
    };

    document.removeEventListener(
        'pdpBundleRelatedProductLoad',
        pdpBundleRelatedProductHandler
    );

    document.addEventListener(
        'pdpBundleRelatedProductLoad',
        pdpBundleRelatedProductHandler,
        false
    );

    /* Cart Open */

    const cartOpenHandler = e => {
        dataLayer.push({ page: { type: 'cart' } });

        dataLayer.push({
            cart: {
                grandTotal: e.detail.cartTotal,
                products: e.detail.products,
                productIds: e.detail.productIds,
                skus: e.detail.skus
            }
        });

        window.google_tag_params = {
            ecomm_prodid: e.detail.skus,
            ecomm_pagetype: 'basket',
            ecomm_totalvalue: e.detail.cartTotal
        };
    };

    document.removeEventListener('cartopen', cartOpenHandler);

    document.addEventListener('cartopen', cartOpenHandler, false);

    /* CheckOut Open */

    const checkoutOpenHandler = e => {
        const productIdStringList = JSON.parse(e.detail.productIds).map(
            element => {
                return element.toString();
            }
        );

        const skuStringList = JSON.parse(e.detail.skus);

        dataLayer.push({ page: { type: 'checkout' } });

        dataLayer.push({
            cart: {
                products: e.detail.checkoutDetails,
                productIds: productIdStringList,
                skus: skuStringList,
                grandTotal: e.detail.grandTotal
            }
        });
    };

    document.removeEventListener('checkoutopen', checkoutOpenHandler);

    document.addEventListener('checkoutopen', checkoutOpenHandler, false);

    /* Upsell Dialog Open  */

    const pdpUpsellProductsHandler = e => {
        const productIdStringList = JSON.parse(e.detail.productIds).map(
            element => {
                return element.toString();
            }
        );

        const skuStringList = JSON.parse(e.detail.skus);

        dataLayer.push({
            upsell: {
                productId: e.detail.id,
                sku: e.detail.sku,
                productIds: productIdStringList,
                skus: skuStringList
            }
        });
    };

    document.removeEventListener('UpsellDialogPopup', pdpUpsellProductsHandler);

    document.addEventListener(
        'UpsellDialogPopup',
        pdpUpsellProductsHandler,
        false
    );

    /* Cart Item Removed */
    const cartItemRemovedHandler = e => {
        dataLayer.push({ page: { type: 'cart' } });
        dataLayer.push({
            removedItem: {
                sku: e.detail.cartItemSKU,
                name: e.detail.productName
            }
        });
    };
    document.removeEventListener('CartItemRemoved', cartItemRemovedHandler);
    document.addEventListener('CartItemRemoved', cartItemRemovedHandler, false);

    /* Checkout Success */

    const checkoutSuccessHandler = e => {
        dataLayer.push({ page: { type: 'checkout_success' } });

        dataLayer.push({
            cart: {
                productIds: JSON.parse(e.detail.productIds),
                skus: [JSON.parse(e.detail.skus)],
                grandTotal: e.detail.grandTotal,
                orderNumber: e.detail.orderNumber,
                shipping: e.detail.shipping_amount,
                tax: e.detail.tax_amount,
                coupon: e.detail.code,
                discount: e.detail.discount_amount
            }
        });

        window.google_tag_params = {
            ecomm_prodid: JSON.parse(e.detail.productIds),
            ecomm_pagetype: 'purchase',
            ecomm_totalvalue: e.detail.grandTotal
        };
    };

    document.removeEventListener('checkout_success', checkoutSuccessHandler);

    document.addEventListener('checkout_success', checkoutSuccessHandler);

    /* User Is Logged In */

    const userLoggedInHandler = e => {
        dataLayer.push({
            page: {
                loggedIn: e.detail.loggedIn
            }
        });

        dataLayer.push({
            user: {
                id: e.detail.id
            }
        });

        dataLayer.push({
            user: {
                loggedIn: e.detail.loggedIn
            }
        });
    };

    document.removeEventListener('logged_in', userLoggedInHandler);

    document.addEventListener('logged_in', userLoggedInHandler);
};
