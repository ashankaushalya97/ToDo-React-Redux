import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore,combineReducers } from "redux";
import allreducers from "./reducers"
import {Provider} from "react-redux"


// //STORE
// //ACTIONS
// const increment = ()=>{
//     return{
//         type:'INCREMENT'
//     }
// }
// const decrement = ()=>{
//     return{
//         type:'DECREMENT'
//     }
// }
// //REDUCER
// const counter = (state = 0,action)=>{
//     switch(action.type){
//         case 'INCREMENT':
//             return state+1;
//             case 'DECREMENT':
//                 return state-1;    
//             }
//         }

// //STORE
// let store = createStore(counter);
// //PRINT STATE
// store.subscribe(()=>console.log("State :"+store.getState()));

// //DISPATCHER
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());


// const store = createStore(
//     allreducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );

const store = createStore(reducer);

function reducer(state,action){
    if(action.type === "changeState"){
        return action.payload.newState;
    }
}

const action = {
    type: 'changeState',
    payload: {
        newState: 'newState'
    }
}

store.dispatch(action);

ReactDOM.render(
    // <Provider store={store}>
        <App />
    // </Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
