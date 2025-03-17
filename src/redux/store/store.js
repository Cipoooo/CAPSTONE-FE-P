import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../reducer/searchReducer.js";
import filterReducer from "../reducer/filterReducer.js";

const store = configureStore({
    reducer:{
        search: searchReducer,
        filters: filterReducer,
    },
});
export default store;