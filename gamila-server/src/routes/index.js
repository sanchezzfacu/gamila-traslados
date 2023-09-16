import { Router } from "express";

import postReview from "./postReview.js"
import getReviews from "./getReviews.js"

const router = Router()

router.use("/post-review", postReview)
router.use("/get-reviews", getReviews)

export default router