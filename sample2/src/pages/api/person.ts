import type { NextApiRequest, NextApiResponse } from "next";
import peopleEn from "../../data/people_en-CA";
import peopleFa from "../../data/people_fa-IR";
import { Person } from "../../types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: Person } | { error: string }>
) {
  const locale = req.query?.locale;
  const id = req.query?.id;

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

  if (!id) {
    return res.status(401).json({ error: "id is required" });
  }

  const foundPerson = dataSource.find((person) => person.id === Number(id));

  if (!foundPerson) {
    return res.status(404).json({ error: "person not found" });
  }

  return res.status(200).json({ data: foundPerson });
}
