// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { mockTweets } from "./tweets-mock";

export type Tweet = {
  id: string;
  content: string;
  datetime: string;
  likes: number;
};

type Data = {
  tweets: Tweet[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ tweets: mockTweets });
}
