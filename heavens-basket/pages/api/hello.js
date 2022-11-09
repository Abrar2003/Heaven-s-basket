// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mongoConnection from "../../config/db"

export default async function handler(req, res) {
mongoConnection()
console.log("Hi welcome")
  res.status(200).json({ name: 'John Doe' });
}
