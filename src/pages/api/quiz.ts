import type { NextApiRequest, NextApiResponse } from "next";

import quizData from "../../../public/data/quizData.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ quizData });
}
