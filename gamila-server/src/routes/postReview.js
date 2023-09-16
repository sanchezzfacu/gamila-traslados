import ReviewModel from "../models/review.schema.js";
import { Router } from "express";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, mail, puntuation, review, date } = req.body;

    const newReview = new ReviewModel({
      name,
      mail,
      puntuation,
      review,
      date,
    });

    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    console.error(error);
    res.status(500).send(error)
  }
});

export default router;
