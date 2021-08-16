import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ResetScroll = ({ history }) => {
    useEffect(() => {
        const unlisten = history.listen(() => {
            if (!history.location.search.includes('ignoreBackToTop')) {
                window.scrollTo(0, 0);
            }
        });
        return () => {
            unlisten();
        };
    }, [history]);

    return null;
};

export default withRouter(ResetScroll);
