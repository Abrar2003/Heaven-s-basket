// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import userModel from "../../models/user.model"
import dbConnect from "../../utils/connection";

export default async function handler(req, res) {
        dbConnect()
  res.status(200).json({ name: 'John Doe' });
}
