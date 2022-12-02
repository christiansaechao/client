import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'; 
import thunk from 'redux-thunk'; 

import reducers from './reducers'; 

import App from './App'; 

// we created the store to send the changed state back to the our application 
// all the reducers get returned to this by the reducers index.js file 
// thunk just lets us return a function instead of an action from the reducers, so we can have them asynchronous
const store = createStore(reducers, compose(applyMiddleware(thunk))); 

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
); 