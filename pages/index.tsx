import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { NewTweet } from "../components/new-tweet";
import { TweetsList } from "../components/tweets-list";
import { RootState } from "../redux/store";
import { setTweets } from "../redux/tweetsSlice";
import styles from "../styles/Home.module.css";

export default function Home() {
  const tweets = useSelector((state: RootState) => state.tweets.value);
  const dispatch = useDispatch();

  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("./api/tweets").then((res) => res.json())
  );

  // Fixme: to be improved bu redux-saga
  useEffect(() => {
    dispatch(setTweets(data?.tweets ?? []));
  }, [data, dispatch]);

  return (
    <div className={styles.container}>
      <Head>
        <title>React-Twitter</title>
        <meta name="description" content="Submit new tweet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">React-Tweet!</a>
        </h1>
        <div className={styles.tweetContainer}>
          <NewTweet />
          {tweets.length === 0 && <h3>No tweet for the moment!</h3>}
          {isLoading ? (
            "loading..."
          ) : error ? (
            "An error has occurred: " + error
          ) : (
            <TweetsList tweets={tweets} />
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
