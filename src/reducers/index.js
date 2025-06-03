import { combineReducers} from "redux"
import cartReducer from "./cart";

const allReducers = combineReducers({
cartReducer,
    //them reducer o day
});

export default allReducers;