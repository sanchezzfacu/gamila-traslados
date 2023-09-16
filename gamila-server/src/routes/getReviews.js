import { Router } from "express";
import ReviewModel from "../models/review.schema.js";

const router = Router()

router.get("/", async (req, res) => {
  try {
    const reviews = await ReviewModel.find()

    res.status(200).json(reviews)
  } catch (error) {
    console.error(error)
    res.send(500).send(error)
  }
})

export default router