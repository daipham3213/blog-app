import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import { history } from '../helpers';
import loginReducer from '../pages/auth/slices/loginSlice';
import drawerReducer from '../components/layout/Main/components/SideBar/drawerSlice';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    router: connectRouter(history),
    drawer: drawerReducer,
    login: loginReducer,
});


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false
    }).concat(sagaMiddleware, routerMiddleware(history))
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
