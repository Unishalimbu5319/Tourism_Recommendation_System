import React, { useEffect, useRef, useState } from "react";
import "../styles/destination-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import Newsletter from "../shared/Newsletter";
import { BASE_URL } from "../utils/config";
import useFetch from "../hooks/useFetch";

const DestinationDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const [destinationRating, setDestinationRating] = useState(null);

  // ✅ Move this hook to the top-level of the component
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [destination]);

  // Fetch the selected destination
  const { data: destination, loading, error } = useFetch(`${BASE_URL}/destinations/${id}`);

  // Destructure properties from destination
  const { photo, title, desc, price, reviews, city, distance, maxGroupSize, address } = destination || {};

  // ratings calculation
  const { totalRating, avgRating } = calculateAvgRating(reviews || []);

  // date format
  const options = { day: "numeric", month: "long", year: "numeric" };

  // submit request to the server
  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
    // later API call remaining
  };

  return (
    <section>
      <Container>
        {
          loading && <h4 className="text-center pt-5">Loading.........</h4>
        }
        {
          error && <h4 className="text-center pt-5">{error}</h4>
        }
        {
          !loading && !error (
           
          )
        }
        {
(
            <Row>
              <Col lg="8">
                <div className="destination__content">
                  <img src={photo} alt={title} className="w-100 mb-4" />

                  <div className="destination__info">
                    <h2>{title}</h2>

                    <div className="d-flex align-items-center gap-5 mb-2">
                      <span className="destination__rating d-flex align-items-center gap-1">
                        <i className="ri-star-fill" style={{ color: "var(--secondary-color)" }}></i>
                        {totalRating === 0 ? "Not Rated" : avgRating.toFixed(1)}
                        <span> ({reviews?.length})</span>
                      </span>

                      <span>
                        <i className="ri-map-pin-user-fill"></i> {address}
                      </span>
                    </div>

                    <div className="tour__extra-details">
                      <span><i className="ri-map-pin-2-line"></i> {city}</span>
                      <span><i className="ri-money-dollar-circle-line"></i> ${price} / per person</span>
                      <span><i className="ri-map-pin-user-fill"></i> {distance} km</span>
                      <span><i className="ri-group-line"></i> {maxGroupSize} people</span>
                    </div>
                  </div>

                  <h5>Description</h5>
                  <p>{desc}</p>

                  <div className="destination__reviews mt-4">
                    <h4>Reviews ({reviews?.length})</h4>

                    <Form onSubmit={submitHandler}>
                      <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star} onClick={() => setDestinationRating(star)}>
                            {star} <i className="ri-star-s-fill"></i>
                          </span>
                        ))}
                      </div>

                      <div className="review__input">
                        <input
                          type="text"
                          ref={reviewMsgRef}
                          placeholder="Share your thoughts"
                          required
                        />
                        <button className="btn primary__btn text-white" type="submit">
                          Submit
                        </button>
                      </div>
                    </Form>

                    <ListGroup className="user__reviews">
                      {reviews?.map((review, index) => (
                        <div className="review__item" key={index}>
                          <img src={avatar} alt="User avatar" />
                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>{review.username || "User"}</h5>
                                <p>{new Date('07-25-2024').toLocaleDateString("en-US", options)}</p>
                              </div>
                              <span className="d-flex align-items-center">
                                {review.rating || 3} <i className="ri-star-s-fill"></i>
                              </span>
                            </div>
                            <h6>{review.text || "Brilliant destination"}</h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </div>
                </div>
              </Col>
              <Col lg="4">
                <Booking destination={destination} avgRating={avgRating} />
              </Col>
            </Row>
          )
        }
      </Container>
    </section>
  );
};

export default DestinationDetails;
