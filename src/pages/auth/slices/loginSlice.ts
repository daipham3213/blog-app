import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginModel } from '../../../models/services.model/models';

export interface AuthState {
    isLoggedIn: boolean;
    logging?: boolean;
    token?: Token;
}

export interface Token {
    id?: string;
    token: string;
}

const initialState: AuthState = {
    isLoggedIn: false,
    logging: false,
    token: undefined,
};


const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        request(state, action: PayloadAction<LoginModel>){
            state.logging = true;
        },
        success(state, action: PayloadAction<Token>){
            state.isLoggedIn = true;
            state.logging = false;
            state.token = action.payload;
        },
        failure(state, action: PayloadAction<string>){
            state.logging = false;
        },
    }
})

export const loginActions = loginSlice.actions;

export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectIsLogging = (state: any) => state.auth.logging;

const loginReducer = loginSlice.reducer;
export default loginReducer;