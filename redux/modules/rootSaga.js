import { all } from 'redux-saga/effects';
import axios from 'axios';
import { authSaga } from './auth';
import { userSaga } from './user';
import { writeSaga } from './missing_write';
import { postSaga } from './missing_post';
import { postsSaga } from './missing_posts';

axios.defaults.baseURL = `http://localhost:4000/`;


export default function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga(), postSaga(), postsSaga()]);
}