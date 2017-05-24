/**
 * Created by juanleyba on 5/24/17.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import reducers from './reducers';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import Router from './router';

class App extends Component {

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}
export default App;
