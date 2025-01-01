const express = require("express");
const catchAsync = require("../utilities/catchAsync");
const { validateCampground, isAuthor, isLoggedIn } = require("../middleware");
const campgrounds = require("../controllers/campgrounds");
const multer = require("multer");
const { storage } = require("../cloudinary");
const upload = multer({ storage });

const router = express.Router();

router
  .route("/")
  .get(catchAsync(campgrounds.index))
  .post(upload.array("image"), (req, res) => {
    console.log(req.body, req.files);
  });
// .post(
//   isLoggedIn,
//   validateCampground,
//   catchAsync(campgrounds.createCampground)
// );

router.get("/new", isLoggedIn, campgrounds.renderNewForm);
// order matters (new before :id)

router
  .route("/:id")
  .get(catchAsync(campgrounds.showCampground))
  .put(
    isLoggedIn,
    isAuthor,
    validateCampground,
    catchAsync(campgrounds.updateCampground)
  )
  .delete(isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground));

router.get(
  "/:id/edit",
  isLoggedIn,
  isAuthor,
  catchAsync(campgrounds.renderEditForm)
);

module.exports = router;
