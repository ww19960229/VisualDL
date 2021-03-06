import '~/utils/i18n';

import App from './App';
import BodyLoading from '~/components/BodyLoading';
import {GlobalStyle} from '~/utils/style';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import store from '~/store';

const TELEMETRY_ID: string = import.meta.env.SNOWPACK_PUBLIC_TELEMETRY_ID;

window._hmt = window._hmt || [];
if (import.meta.env.MODE === 'production' && TELEMETRY_ID) {
    (function () {
        const hm = document.createElement('script');
        hm.src = `https://hm.baidu.com/hm.js?${TELEMETRY_ID}`;
        const s = document.getElementsByTagName('script')[0];
        s.parentNode?.insertBefore(hm, s);
    })();
}

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <React.Suspense fallback={<BodyLoading />}>
            <Provider store={store}>
                <App />
            </Provider>
        </React.Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
    import.meta.hot.accept();
}
