import { all, fork, put, delay, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import shortId from 'shortid';

import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  CHANGE_NICKNAME_REQUEST,
  CHANGE_NICKNAME_SUCCESS,
  CHANGE_NICKNAME_FAILURE,
} from '../reducers/user';

function changeNicknameAPI(data) {
  return axios.patch('/api/user/nickname', data)
}
function* changeNickname(action) {
  try {
    yield delay(1000);
    yield put({
      type: CHANGE_NICKNAME_SUCCESS,
      data: action.data
    });
  } catch(err) {
    yield put({
      type: CHANGE_NICKNAME_FAILURE,
      error: err.response.data,
    })
  }
}


function logInAPI(data) {
  
  return axios.post('/api/login', data) // 로그인을 할떄 실제 데이터를 넣어서 요청 보내기
}

function* logIn(action) {
  try {
    //const result = yield call(logInAPI, action.data) // 서버요청 결과값을 받기
  yield delay(1000);
  yield put({
    type: LOG_IN_SUCCESS,
    data: action.data
  });
} catch(err) {
    yield put({ 
      type: LOG_IN_FAILURE, 
      error: err.response.data,
    })
  }
}

function logOutAPI() {
  return axios.post('/api/logout') 
}

function* logOut() {
  try {
  //const result = yield call(logOutAPI) 
  yield delay(1000); 
  yield put({
    type: LOG_OUT_SUCCESS,
   // data: result.data
  });
} catch(err) {
    yield put({ 
      type: LOG_OUT_FAILURE, 
      error: err.response.data,
    })
  }
}

function signUpAPI() {
  return axios.post('/api/signUp');
}

function* signUp(action) {
  try {
    // const result = yield call(signUpAPI);
    const id = shortId.generate();
    yield delay(1000);
    yield put({
      type: SIGN_UP_SUCCESS,
     //  data: action.data
      data: {...action.data, id}
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function* watchChangeNickname() {
  yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNickname);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
    fork(watchChangeNickname),
  ]);
}