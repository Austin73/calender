import { combineReducers } from "redux";
import { allEventReducers } from "./allEventReducers";
import { datereducers } from "./datereducers";
import {newEventReducer} from "./newEventReducer"
const allreducers= combineReducers({
    date:datereducers,
    newevent:newEventReducer,
    allevent:allEventReducers
})
export default allreducers