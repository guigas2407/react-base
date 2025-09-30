import { configureStore, createSlice } from '@reduxjs/toolkit';

// Slice do contador
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

// Slice do botão clicado (boolean)
const botaoClicado = createSlice({
  name: 'clicker',
  initialState: false,
  reducers: {
    onClicker: (state) => !state, // alterna true/false
  },
});

// Exportando actions
export const { increment, decrement } = counterSlice.actions;
export const { onClicker } = botaoClicado.actions;

// Criando a store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    clicker: botaoClicado.reducer,
  },
});

export default store;
