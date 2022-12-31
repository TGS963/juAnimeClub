import { NextApiRequest, NextApiResponse } from "next";
import { StatusCodes } from "http-status-codes";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const anime = await prisma.trending.findMany();

    // GET THE KEY FROM DATABASE
    if (anime) {
      return res.status(StatusCodes.OK).send(anime);
    }
  } catch (error) {
    console.log("🚀 => handler => error", error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ message: "Server error, please try again..." });
  }
}
