import type { NextApiRequest, NextApiResponse } from "next";
import peopleEn from "../../data/people_en-CA";
import peopleFa from "../../data/people_fa-IR";
import { Person } from "../../types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: Person[] } | { error: string }>
) {
  const locale = req.query?.locale;

  let dataSource;

  switch (locale) {
    case "fa-IR":
      dataSource = peopleFa;
      break;

    case "en-CA":
    default:
      dataSource = peopleEn;
      break;
  }

  return res.status(200).json({ data: dataSource });
}
