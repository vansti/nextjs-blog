import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  text: string
}

const hello = (_req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ text: 'Hello' })
}

export default hello;