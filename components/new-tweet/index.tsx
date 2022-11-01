import React, { useState } from "react";
import styles from "./NewTweet.module.css";

export const NewTweet: React.FC = () => {
  const [tweet, setTweet] = useState("");

  function handleChange(event: any): void {
    setTweet(event.target.value);
  }

  function handleClick(event: any): void {
    console.log("New tweet has been submitted!!");
  }

  return (
    <>
      <textarea
        className={styles.textarea}
        name="tweet"
        id="new-tweet-input"
        rows={6}
        placeholder="What's happening?"
        maxLength={140}
        value={tweet}
        onChange={handleChange}
      />
      <button className={styles.submit} type="submit" onClick={handleClick}>
        Tweet
      </button>
    </>
  );
};
