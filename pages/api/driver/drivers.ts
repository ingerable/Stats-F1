// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Driver from '../../../models/driver'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Driver>>
) {
  const route: String = process.env.API_ERGAST + "drivers.json";
  let resApi =  await fetch(route);
  let apiResponse = await resApi.json();
  let driversApiRes = apiResponse.MRData.DriverTable.Drivers;
  let drivers: Array<Driver> = [];
  driversApiRes.forEach(driverJSON => {
    let driver = new Driver(driverJSON.familyName, driverJSON.givenName, driverJSON.dateOfBirth, driverJSON.nationality);
    driver.wikipediaArticleUrl = driverJSON.url;
    drivers.push(driver);
  });
  res.status(200).json(drivers);
}
