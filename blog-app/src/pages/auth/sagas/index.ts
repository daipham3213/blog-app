import { fork } from 'redux-saga/effects';
import watchLogin from './loginSaga';

export default function* authSaga(){
    yield fork(watchLogin)
}