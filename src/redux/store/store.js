import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../reducer/searchReducer.js";

const store = configureStore({
    reducer:{
        search: searchReducer,
    },
});
export default store;