import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Tweet as TweetProps } from "../../pages/api/tweets";
import { dislikeTweet, likeTweet } from "../../redux/tweetsSlice";
import styles from "./Card.module.css";

export const TweetCard: React.FC<TweetProps> = (props: TweetProps) => {
  const [isAlreadyLiked, setIsAlreadyLiked] = useState(false);
  const dispatch = useDispatch();

  const handleLike = (): void => {
    if (isAlreadyLiked) {
      dispatch(dislikeTweet(props.id));
      setIsAlreadyLiked(!isAlreadyLiked);
    } else {
      dispatch(likeTweet(props.id));
      setIsAlreadyLiked(!isAlreadyLiked);
    }
  };

  return (
    <div className={styles.tweetContainer}>
      <p className={styles.tweetBody}>{props.content}</p>
      <div className={styles.tweetFooter}>
        <div className={styles.tweetLikes}>
          <button onClick={handleLike}>
            {isAlreadyLiked ? "Unlike" : "Like"}
          </button>
          <span>{props.likes}</span>
        </div>
        <div className={styles.tweetDate}>{props.datetime}</div>
      </div>
    </div>
  );
};
