import React from "react";
import { TweetCard, TweetProps } from "../tweet-card";

export interface TweetsListProps {
  tweets: TweetProps[];
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
