import {createStore} from 'redux'; /* , applyMiddleware, compose */
/* import thunk from "redux-thunk"; */

import Reducers from '../reducers/Reducers'

const store = createStore( 
    Reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default store;


/* const store = createStore(
    Reducers, 
    applyMiddleware(thunk)
    /* compose(applyMiddleware(thunk),
    window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION() ); */