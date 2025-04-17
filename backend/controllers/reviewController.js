import Destination from "../models/destination.js";
import review from "../models/Review.js";

export const createReview = async (req,res) => {

     const destinationId = req.params.destinationId
     const newReview = newReview({...req.body})

   try {

    const savedReview = await newReview.save()

    // after creating a new review now update the reviews  array of the destination
     await Destination.findByIdAndUpdate(destinationId, {
        $push: {reviews: savedReview._id}
     })

     res.status(200).json({success:true, message:'Review submitted',
     data:savedReview})

   } catch (err) {
    res.status(500).json({success:false, message:'Failed to submit'})
   }  
};
