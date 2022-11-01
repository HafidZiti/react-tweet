import React from "react";
import { Tweet } from "../../pages/api/tweets";
import { TweetCard } from "../tweet-card";

export interface TweetsListProps {
  tweets: Tweet[];
}

export const TweetsList: React.FC<TweetsListProps> = (
  props: TweetsListProps
) => {
  return (
    <div className="">
      {props.tweets.map((tweet, i) => {
        return <TweetCard key={i} {...tweet} />;
      })}
    </div>
  );
};
