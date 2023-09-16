import { Schema, model } from "mongoose";

const reviewSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"]
  },
  mail: {
    type: String,
    required: [true, "mail is required"]
  },
  puntuation: {
    type: Number, 
    required: [true, "puntuation is required"]
  },
  review: {
    type: String,
  },
  date: {
    type: Date,
    required: [true, "date is required"]
  }
})

const ReviewModel = model("Review", reviewSchema)

export default ReviewModel