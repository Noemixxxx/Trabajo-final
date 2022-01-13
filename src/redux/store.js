import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import  rootReducer from "./reducers/rootReducers";


const middlewares = [
    thunkMiddleware,
].filter(Boolean);

export const store = createStore (
rootReducer,
    composeWithDevTools(applyMiddleware( ...middlewares))
);
