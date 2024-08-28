import { createSlice } from "@reduxjs/toolkit";
import cookie from "js-cookie";
import { InitialStateI } from "./types";

const initialState:InitialStateI = {
    token: cookie.get('token') || null,
    tokenType: cookie.get('tokenType') || null,
    user: cookie.get('user') ? JSON.parse(cookie.get('user')!) : null,
    isAuthed: Boolean(cookie.get('token')) || false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.token = action.payload.token;
            state.tokenType = action.payload.tokenType;
            state.user = action.payload.user;
            state.isAuthed = Boolean(action.payload.token);

            cookie.set('token', action.payload.token, { expires: 7 });
            cookie.set('tokenType', action.payload.tokenType, { expires: 7 });
            cookie.set('user', JSON.stringify(action.payload.user), { expires: 7 });
        },
        signUp: (state, action) => {
            state.token = action.payload.token;
            state.tokenType = action.payload.tokenType;
            state.user = action.payload.user;
            state.isAuthed = Boolean(action.payload.token);

            cookie.set('token', action.payload.token, { expires: 7 });
            cookie.set('tokenType', action.payload.tokenType, { expires: 7 });
            cookie.set('user', JSON.stringify(action.payload.user), { expires: 7 });
        },
        signOut: (state) => {
            state.token = null;
            state.tokenType = null;
            state.user = null;
            state.isAuthed = false;

            cookie.remove('token');
            cookie.remove('tokenType');
            cookie.remove('user');
    
        },
        updateUser: (state, action) => {
            const newUser = { ...state.user, ...action.payload.setter };

            // Updating the user in cookies
            cookie.set('user', JSON.stringify(newUser));
      
            // Updating the user in the state
            state.user = newUser;
          },
    }
});

export const { signIn, signUp, signOut, updateUser } = authSlice.actions;

export default authSlice.reducer;