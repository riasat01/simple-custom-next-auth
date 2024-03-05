import { createSlice } from "@reduxjs/toolkit";

type UserType = {
    name?: string,
    email?: string,
    password?: string
}

const initialState = {
    user: {
        name: '',
        email: '',
        password: ''
    },
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action?.payload;
        },
        removeUser: (state) => {
            state.user = {
                name: '',
                email: '',
                password: ''
            }
        }
    }
})

export const { setUser, removeUser } = userSlice?.actions;

export default userSlice?.reducer;