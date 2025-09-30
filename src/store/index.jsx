import { configureStore, createSlice } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './modules/sagas';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

const botaoClicado = createSlice({
  name: 'clicker',
  initialState: false,
  reducers: {
    onClicker: (state) => !state,
    success: (state) => {
      console.log('Tudo certo');
      return !state;
    },
    failure: (state) => {
      console.log('Deu Erro');
      return !state;
    },
    request: (state) => {
      console.log('Estou fazendo a requisição');
      return !state;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export const { onClicker, success, failure, request } = botaoClicado.actions;

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    clicker: botaoClicado.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
