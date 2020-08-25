/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import store from '@redux/store';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import { HashRouter as Router } from 'react-router-dom';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import Root from './router/router';

class App extends React.Component {
    render() {
        return (
            <ConfigProvider locale={zh_CN}>
                <Provider store={store}>
                    <Router>
                        <Root />
                    </Router>
                </Provider>
            </ConfigProvider>
        );
    }
}

const render = Component => {
    ReactDOM.render(<Component />, document.getElementById('app'));
};

if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept(() => {
        render(App);
    });
}

render(App);
