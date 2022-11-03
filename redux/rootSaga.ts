import { all } from "redux-saga/effects";
import { moreTweetsSaga, tweetsSaga } from "./saga";

export default function* rootSaga() {
  yield all([tweetsSaga(), moreTweetsSaga()]);
}
