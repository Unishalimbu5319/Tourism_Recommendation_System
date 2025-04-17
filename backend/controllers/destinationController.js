import Destination from '../models/destination.js'; //  only one import needed

//  Create new destination
export const createDestination = async (req, res) => {
  const newDestination = new Destination(req.body);

  try {
    const savedDestination = await newDestination.save();
    res.status(200).json({
      success: true,
      message: "Destination created successfully",
      data: savedDestination,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create destination. Try again later",
      error: err.message,
    });
  }
};

// Update destination
export const updateDestination = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedDestination = await Destination.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true } 
    );

    res.status(200).json({
      success: true,
      message: "Destination updated successfully",
      data: updatedDestination,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update destination",
      error: err.message,
    });
  }
};

// Delete destination
export const deleteDestination = async (req, res) => {
  const id = req.params.id;

  try {
    await Destination.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Destination deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete destination",
      error: err.message,
    });
  }
};

//  Get single destination
export const getSingleDestination = async (req, res) => {
  const id = req.params.id;

  try {
    const destination = await Destination.findById(id).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successful",
      data: destination,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Destination unavailable",
    });
  }
};

//  Get all destinations with pagination
export const getAllDestination = async (req, res) => {
  const page = parseInt(req.query.page) || 0;

  try {
    const destinations = await Destination.find({})
      .populate('reviews')
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: destinations.length,
      message: "Successful",
      data: destinations,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Destination unavailable",
    });
  }
};

//  Search destinations
export const getDestinationBySearch = async (req, res) => {
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    const destinations = await Destination.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successful",
      data: destinations,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Destination unavailable",
    });
  }
};

//  Get featured destinations
export const getFeaturedDestination = async (req, res) => {
  try {
    const destinations = await Destination.find({ featured: true })
    .populate("reviews")
    .limit(8);

    res.status(200).json({
      success: true,
      message: "Successful",
      data: destinations,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Destination unavailable",
    });
  }
};

// Get total destination count
export const getDestinationCount = async (req, res) => {
  try {
    const destinationCount = await Destination.estimatedDocumentCount();

    res.status(200).json({
      success: true,
      data: destinationCount,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch destination",});
  }
};
