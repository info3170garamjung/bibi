import axios from 'axios';
import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import {
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
} from '../reducers/post';

function addPostAPI(data) {
  return axios.post('/api/post', data) // 서버의 요청 보내기
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data)
    yield delay(1000);
    yield put({
      type: ADD_POST_SUCCESS,
      data: action.data,
      // data: result.data
    });
  } catch(err) {
    yield put({
      type: ADD_POST_FAILURE,
      data: err.respose.data,
    })
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
  ]);
}