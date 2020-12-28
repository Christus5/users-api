import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/root-reducer';


const AppProvider = ({children}) => {
    const store = createStore(reducers);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default AppProvider;