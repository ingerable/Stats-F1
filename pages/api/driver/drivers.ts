// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Driver from '../../../models/driver'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Driver>>
) {
  const route: String = process.env.API_ERGAST + "drivers.json";
  let resApi =  await fetch(route);
  console.log(resApi)
  res.status(200).json([Driver.createFromApi({"ok": "ok"})]);
}
