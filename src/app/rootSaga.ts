import {all} from 'redux-saga/effects'
import authSaga from '../pages/auth/sagas';


function* rootSaga() {
    console.log('Saga active');
    yield all([authSaga()])
}

export default rootSaga
