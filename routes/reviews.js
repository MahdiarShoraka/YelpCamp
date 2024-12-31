const express = require("express");
const catchAsync = require("../utilities/catchAsync");
const Review = require("../models/review");
const Campground = require("../models/campground");
const router = express.Router({ mergeParams: true });
const { validateReview, isLoggedIn } = require("../middleware");

router.post(
  "/",
  isLoggedIn,
  validateReview,
  catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    req.flash("success", "Successully added a review!");
    res.redirect(`/campgrounds/${campground._id}`);
  })
);

router.delete(
  "/:reviewId",
  catchAsync(async (req, res) => {
    const { reviewId, id } = req.params;
    await Campground.findByIdAndUpdate(id, {
      $pull: { reviews: reviewId },
    });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Successully deleted your review!");
    res.redirect(`/campgrounds/${id}`);
  })
);

module.exports = router;
