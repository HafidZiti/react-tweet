import React, { useState } from "react";
import styles from "./Card.module.css";

export interface TweetProps {
  id: string;
  content: string;
  date: string;
  likes: number;
}

export const TweetCard: React.FC<TweetProps> = (props: TweetProps) => {
  const [isAlreadyLiked, setIsAlreadyLiked] = useState(false);

  const handleLike = (): void => {};

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
        <div className={styles.tweetDate}>{props.date}</div>
      </div>
    </div>
  );
};
