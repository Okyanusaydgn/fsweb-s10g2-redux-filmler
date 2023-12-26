import {combineReducers, legacy_createStore as createStore} from "redux";
import movieReducer from "./reducers";
import { favoriReducer } from "./reducers/favoriReducer";
// combineReducer içinde obje formatında istediğimiz kadar reducer ekleyebiliriz. (key:value yapısı olacak şeklinde...!)



const reducers = combineReducers({
    movie: movieReducer,
    favori: favoriReducer,
});





export const store = createStore(reducers);