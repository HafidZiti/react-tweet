import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tweet } from "../../pages/api/tweets";
import { RootState } from "../../redux/store";
import { loadMore } from "../../redux/tweetsSlice";
import { TweetCard } from "../tweet-card";
import styles from "./List.module.css";

export interface TweetsListProps {
  tweets: Tweet[];
}

export const TweetsList: React.FC<TweetsListProps> = (
  props: TweetsListProps
) => {
  const tweets = useSelector((state: RootState) => state.tweets.value);
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(loadMore(tweets.length));
  };

  return (
    <div className={styles.listContainer}>
      {props.tweets.map((tweet, i) => {
        return <TweetCard key={i} {...tweet} />;
      })}
      <button
        className={styles.loadMore}
        type="button"
        onClick={handleLoadMore}
      >
        Load more
      </button>
    </div>
  );
};
