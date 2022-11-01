import Head from "next/head";
import Image from "next/image";
import { useQuery } from "react-query";
import { NewTweet } from "../components/new-tweet";
import { TweetsList } from "../components/tweets-list";
import styles from "../styles/Home.module.css";

export const mock = {
  tweets: [
    {
      id: "Id1",
      content: "nfkjrekfjn kjnrfefnkazd zefkljerfkjl",
      date: "01-13-22:20:20",
      likes: 554,
    },
    {
      id: "Id1",
      content: "nfkjrekfjn kjnrfefnkazd zefkljerfkjl",
      date: "01-13-22:20:20",
      likes: 554,
    },
    {
      id: "Id1",
      content: "nfkjrekfjn kjnrfefnkazd zefkljerfkjl",
      date: "01-13-22:20:20",
      likes: 554,
    },
  ],
};

export default function Home() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("./api/tweets").then((res) => res.json())
  );

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
          {isLoading ? (
            "loading..."
          ) : error ? (
            "An error has occurred: " + error
          ) : (
            <TweetsList {...data} />
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
