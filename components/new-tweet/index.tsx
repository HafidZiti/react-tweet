import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Tweet } from "../../pages/api/tweets";
import { addTweet } from "../../redux/tweetsSlice";
import styles from "./NewTweet.module.css";

const MAX_CHAR = 140;

export const NewTweet: React.FC = () => {
  const [tweet, setTweet] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const dispatch = useDispatch();

  function handleChange(event: any): void {
    setTweet(event.target.value);
  }

  useEffect(() => {
    if (!tweet.trim() || tweet.length > MAX_CHAR) setIsDisabled(true);
    else setIsDisabled(false);
  }, [tweet]);

  function handleClick(): void {
    if (isDisabled) return;
    const newTweet: Tweet = {
      id: uuidv4(),
      content: tweet,
      datetime: new Date().toString(),
      likes: 0,
    };
    dispatch(addTweet(newTweet));
    setTweet("");
  }

  return (
    <>
      <textarea
        className={styles.textarea}
        name="tweet"
        id="new-tweet-input"
        rows={6}
        placeholder="What's happening?"
        maxLength={MAX_CHAR}
        value={tweet}
        onChange={handleChange}
      />
      <button
        className={styles.submit}
        type="submit"
        onClick={handleClick}
        disabled={isDisabled}
      >
        Tweet
      </button>
    </>
  );
};
