import Reviews from "../models/Review.js";
import Tour from "../models/Tour.js";

export const createReviews = async (req, res) => {
  const tourId = req.params.tourId;
  const newReviews = new Reviews({ ...req.body });

  try {
    const savedReview = await newReviews.save();

    // after creating a new review now update the reviews array of the tour
    await Tour.findByIdAndUpdate(tourId, {
      $push: { reviews: savedReview._id },
    });

    res.status(200).json({ success: true, message: "Review submitted" });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: `${err}   ...Faild to submit` });
  }
};
