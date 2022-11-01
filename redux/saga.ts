import { setTweets } from "./tweetsSlice";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { sagaActions } from "./sagaActions";

const getTweets = () => fetch("./api/tweets").then((res) => res.json());

function* fetchTweetsSaga() {
  try {
    const response = yield call(getTweets);

    yield put(setTweets(response.tweets ?? []));
  } catch (e) {
    yield put(setTweets(e.message));
  }
}

function* tweetsSaga() {
  yield all([takeLatest(sagaActions.FETCH_TWEET_SAGA, fetchTweetsSaga)]);
}

export default tweetsSaga;
