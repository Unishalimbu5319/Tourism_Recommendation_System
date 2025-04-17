import express from "express";
import {
  createDestination,
  deleteDestination,
  getAllDestination,
  getSingleDestination,
  updateDestination,
  getDestinationBySearch,
  getFeaturedDestination,
  getDestinationCount,
} from "./../controllers/destinationController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create new Destination
router.post("/", verifyAdmin, createDestination);

// Update Destination
router.put("/:id", verifyAdmin, updateDestination);

// Delete Destination
router.delete("/:id", verifyAdmin, deleteDestination);

// Get Single Destination
router.get("/:id", getSingleDestination);

// get all Destinations
router.get("/", getAllDestination); 

// get destination by search
router.get("/search/getDestinationBySearch", getDestinationBySearch);
router.get("/search/getFeaturedDestination", getFeaturedDestination);
router.get("/search/getDestinationCount", getDestinationCount);

export default router;
