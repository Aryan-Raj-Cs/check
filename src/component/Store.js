import { createStore, applyMiddleware, compose } from "redux";
import Reducer from "../redux/Reducer";
// import ReduxThunk from "redux-thunk";
// import thunkMiddleware from "redux-thunk"

// const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


// const middlewares = [thunkMiddleware];
    // const middleWareEnhancer = applyMiddleware(...middlewares);
    // eslint-disable-next-line no-underscore-dangle
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    // const store = createStore(
    //     rootReducer,
    //     composeEnhancers(
    //         middleWareEnhancer
    //     ),
    // );
    const store = createStore(
        Reducer,
        composeEnhancers(
        ),
    );


export default store;
