
import {createStore, applyMiddleware} from "redux";
import reducer from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {redirect} from "../middlewares/redirect";
import {createAPI} from "../services/api";
import {ActionCreator} from "./action";

const api = createAPI();


const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

export default store;
