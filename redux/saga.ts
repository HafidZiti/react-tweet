import { initTweets, loadMore, setTweets } from "./tweetsSlice";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { Tweet } from "../pages/api/tweets";
import { SagaIterator } from "redux-saga";
import { PayloadAction } from "@reduxjs/toolkit";

const getTweets = (): Promise<Tweet[]> =>
  fetch("./api/tweets").then((res) => res.json());

function* fetchTweetsSaga(action: PayloadAction<number>): SagaIterator {
  const start = action.payload ?? 0;
  try {
    const response = yield call(getTweets);
    yield put(setTweets(response.tweets.slice(start, start + 10)));
  } catch (e) {
    yield put(setTweets([]));
  }
}

export function* tweetsSaga() {
  yield all([takeLatest(initTweets.type, fetchTweetsSaga)]);
}

export function* moreTweetsSaga() {
  yield all([takeLatest(loadMore.type, fetchTweetsSaga)]);
}
