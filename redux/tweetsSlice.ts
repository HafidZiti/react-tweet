import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Tweet } from "../pages/api/tweets";

export interface TweetsState {
  value: Tweet[];
}

const initialState: TweetsState = {
  value: [],
};

export const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    initTweets: () => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    },
    setTweets: (state, action: PayloadAction<Tweet[]>) => {
      state.value = [...state.value, ...action.payload];
    },
    likeTweet: (state, action: PayloadAction<string>) => {
      state.value = state.value.map((tweet) => {
        if (tweet.id === action.payload) {
          tweet.likes++;
        }
        return tweet;
      });
    },
    dislikeTweet: (state, action: PayloadAction<string>) => {
      state.value = state.value.map((tweet) => {
        if (tweet.id === action.payload) {
          tweet.likes--;
        }
        return tweet;
      });
    },
    addTweet: (state, action: PayloadAction<Tweet>) => {
      state.value = [action.payload, ...state.value];
    },
    loadMore: (state, action: PayloadAction<number>) => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  initTweets,
  setTweets,
  likeTweet,
  dislikeTweet,
  addTweet,
  loadMore,
} = tweetsSlice.actions;

export default tweetsSlice.reducer;
