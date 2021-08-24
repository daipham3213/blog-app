import {all} from 'redux-saga/effects'

function* helloSaga(){
    console.log('Hello saga! Update');
}

function* rootSaga() {
    console.log('Saga active');
    yield all([helloSaga()])
}

export default rootSaga
