
import axios from 'axios';
import shortId from 'shortid';
import { all, delay, fork, put, takeLatest, throttle } from 'redux-saga/effects';
import {
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  REMOVE_POST_FAILURE,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_REQUEST,
  EDIT_POST_REQUEST,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAILURE,
  setEditingStatus,
  COUNT_CATEGORY_POSTS_REQUEST,
  COUNT_CATEGORY_POSTS_SUCCESS,
  COUNT_CATEGORY_POSTS_FAILURE,

} from '../reducers/post';
import { select } from 'redux-saga/effects';

import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';

function editPostAPI(data) {
  return axios.put('/api/post', data)
}

function* editPost(action) {
  try {
    yield delay(1000);
    const me = yield select((state) => state.user.me);
    yield put({
      type: EDIT_POST_SUCCESS,
      data: {
        id: action.data.id,
        ...action.data,
        User: {
          ...action.data.User,
         id: me.id,
        },
      },
    });
    // add
    yield put(setEditingStatus(false));

  }
  catch(err) {
    yield put({
      type: EDIT_POST_FAILURE,
      data: err.respose.data,
    })
  }
}

function addPostAPI(data) {
  return axios.post('/api/post', data) // 서버의 요청 보내기
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data)
    yield delay(1000);
    const id = shortId.generate();
   // const signUpState = yield select((state) => state.user);
   const me = yield select((state) => state.user.me);
    yield put({
      type: ADD_POST_SUCCESS,
      data: {
        id,
        ...action.data,
        User: {
          ...action.data.User,
         id: me.id,
        },
      },
    });
    /*
    yield put({
      type: ADD_POST_TO_ME,
      data: {
        id,
        ...action.data,
        User: {
          ...action.data.User,
          id: me.id,
        },
      },
    });
    */
    yield put({
      type: ADD_POST_TO_ME,
      data: {
        postId: id,
        userId: me.id,
      },
    });

  } catch(err) {
    yield put({
      type: ADD_POST_FAILURE,
      data: err.respose.data,
    })
  }
}

function removePostAPI(data) {
  return axios.delete('/api/post', data)
}

function* removePost(action) {
  try {
    yield delay(1000);
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: {
        id:action.data
      },
    });
    yield put({
      type: REMOVE_POST_OF_ME,
      data: {
        id:action.data
      },
    });
  } catch(err) {
    yield put({
      type: REMOVE_POST_FAILURE,
      data: err.response.data,
    })
  }
}

function* countCategoryPosts() {
  try {
    yield delay(1000);
    const mainPosts = yield select((state) => state.post.mainPosts);
    const categoryPosts = mainPosts.reduce((acc, cur) => {
      if(!acc[cur.category]) {
        acc[cur.category] = 0;
      }
      acc[cur.category]++;
      return acc;
    }, {});
    yield put({
      type: COUNT_CATEGORY_POSTS_SUCCESS,
      data: categoryPosts,
    });
  } catch(err) {
    yield put({
      type: COUNT_CATEGORY_POSTS_FAILURE,
      error: err.response.data,
    })
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchEditPost() {
  yield takeLatest(EDIT_POST_REQUEST, editPost);
}

function* watchCountCategoryPosts() {
  yield takeLatest(COUNT_CATEGORY_POSTS_REQUEST, countCategoryPosts);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchRemovePost),
    fork(watchEditPost),
    fork(watchCountCategoryPosts),
  ]);
}

