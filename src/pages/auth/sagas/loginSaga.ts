import { call, put, take, fork } from 'redux-saga/effects';
import { LoginModel } from '../../../models/services.model/models';
import { loginActions } from '../slices/loginSlice';
import { push } from 'connected-react-router';
import AuthenticateService from '../../../services/authenticate.service';
import { PayloadAction } from '@reduxjs/toolkit';

function* handleLogin(payload: LoginModel) {
    try {
        const response = yield call(AuthenticateService.Login, payload);

        localStorage.setItem('access_token', response.token);
        yield put(
            loginActions.success({
                id: response.id,
                token: response.token,
            }));
        // redirect to admin page
        yield put(push('/'));
    } catch (error) {
        yield put(loginActions.failure(error.message));
    }
}


export default function* watchLogin() {
    const isLoggedIn = AuthenticateService.IsLoggedIn();
    if (!isLoggedIn) {
        const action: PayloadAction<LoginModel> = yield take(loginActions.request.type);
        yield fork(handleLogin, action.payload);
    }
}

