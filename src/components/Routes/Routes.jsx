import React, { Fragment, useEffect, Suspense, lazy } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { bool } from 'prop-types';

import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import MagentoRoute from '@magento/venia-ui/lib/components/MagentoRoute';
import Main from '@magento/venia-ui/lib/components/Main';
import { ACCOUNT__ROOT } from '@supacentrePwa/components/AccountRoutes/routeConstants';

const Search = lazy(() => import('@supacentrePwa/components/SearchPage/index'));
const Receipt = lazy(() =>
    import('@magento/venia-ui/lib/components/Checkout/Receipt')
);
const News = lazy(() => import('@supacentrePwa/components/News'));

const AccountRoutes = lazy(() =>
    import('@supacentrePwa/components/AccountRoutes')
);
const PaypalRoutes = lazy(() =>
    import('@supacentrePwa/components/PaypalRoutes')
);
const Checkout = lazy(() => import('@supacentrePwa/checkout/Checkout'));
import ResetScroll from './ResetScroll';

const Routes = ({ hasOverlay }) => {
    const history = useHistory();

    useEffect(() => {
        history.listen(() => {
            // check for sw updates on page change
            navigator.serviceWorker
                .getRegistrations()
                .then(regs => regs.forEach(reg => reg.update()));
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Fragment>
            <ResetScroll />
            <Switch>
                <Route exact path="/checkout">
                    <Suspense fallback={fullPageLoadingIndicator}>
                        <Checkout />
                    </Suspense>
                </Route>
                <Route path="/paypal">
                    <Suspense fallback={fullPageLoadingIndicator}>
                        <PaypalRoutes />
                    </Suspense>
                </Route>
                <Route path="/">
                    <Main isMasked={hasOverlay}>
                        <Suspense fallback={fullPageLoadingIndicator}>
                            <Switch>
                                <Route exact path="/search.html">
                                    <Search />
                                </Route>
                                <Route exact path="/order-confirmation">
                                    <Receipt />
                                </Route>
                                <Route path={ACCOUNT__ROOT}>
                                    <AccountRoutes />
                                </Route>
                                <Route exact path="/news">
                                    <News />
                                </Route>
                                <Route exact path="/news/:slug">
                                    <News />
                                </Route>
                                <Route>
                                    <MagentoRoute />
                                </Route>
                            </Switch>
                        </Suspense>
                    </Main>
                </Route>
            </Switch>
        </Fragment>
    );
};

Routes.propTypes = {
    hasOverlay: bool
};

export default Routes;
