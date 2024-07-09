import { combineReducers } from "@reduxjs/toolkit";
import UserSlice from "../State/Features/UserSlice";

const RootReducer = combineReducers({
    UserSlice
});

export default RootReducer;