import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "./destination-card.css";
import calculateAvgRating from "../utils/avgRating";

const DestinationCard = ({ destination }) => {
  const { _id, title, city, photo, price, featured, reviews = [], address } = destination;

  // Make sure reviews is always an array
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  // Ensure avgRating is a valid number before calling toFixed
  const formattedRating =
    typeof avgRating === "number" && !isNaN(avgRating)
      ? avgRating.toFixed(1)
      : "N/A";

  return (
    <div className="destination__card">
      <Card>
        <div className="destination__img">
          {featured && <span className="featured-badge">Featured</span>}
          <img src={photo} alt={title} className="destination-image" />
        </div>

        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="destination__location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i> {city}
            </span>
            <span className="destination__rating d-flex align-items-center gap-1">
              <i className="ri-star-fill"></i>{" "}
              {totalRating === 0 ? "Not Rated" : formattedRating}
              <span>({reviews.length})</span>
            </span>
          </div>

          <h5 className="destination__title">
            <Link to={`/destinations/${_id}`}>{title}</Link>
          </h5>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              ${price} <span>/per person</span>
            </h5>
            <Link to={`/destinations/${_id}`} className="btn booking__btn">
              Book Now
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default DestinationCard;
