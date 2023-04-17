import { configureStore } from "@reduxjs/toolkit";

import { authSlice } from "./redusers/auth";
import { postSlice } from "./redusers/posts";
import {craftsSlice } from "./redusers/crafts";

import { authSlice } from "./reducers/auth";
import { postSlice } from "./reducers/posts";
import {craftsSlice } from "./reducers/crafts";
import {orderSlice } from "./reducers/order";

export default configureStore ({
    reducer :{
        auth:  authSlice.reducer,
        post:  postSlice.reducer,

        craft: craftsSlice.reducer

        craft: craftsSlice.reducer,

    }
})