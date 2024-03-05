import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice"

const store = configureStore({
    reducer: {
        userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export default store;