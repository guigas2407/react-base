import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { success, failure, request } from '../index'; // importar só as actions

// Função fake de requisição
const requisicao = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject();
    }, 2000);
  });

function* exampleRequest() {
  try {
    yield call(requisicao);
    yield put(success());
  } catch {
    toast.error('Deu erro!');
    yield put(failure());
  }
}

export default function* rootSaga() {
  yield all([takeLatest(request, exampleRequest)]);
}
