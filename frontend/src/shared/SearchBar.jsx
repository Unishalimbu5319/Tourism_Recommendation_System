import React, { useRef } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";
import { BASE_URL } from "../utils/config";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const locationRef = useRef("");
  const distanceRef = useRef("0");
  const maxGroupSizeRef = useRef("0");
  const navigate = useNavigate();

  const searchHandler = async () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === "" || distance === "" || maxGroupSize === "") {
      return alert("All fields are required");
    }

    try {
      const res = await fetch(
        `${BASE_URL}/destinations/search/getDestinationBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
      );

      if (!res.ok) {
        return alert("Something went wrong");
      }

      const result = await res.json();

      navigate(
        `/destinations/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
        { state: result.data }
      );
    } catch (err) {
      console.error("Error during search:", err);
      alert("Failed to fetch search results.");
    }
  };

  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input
                type="text"
                placeholder="Where are you going?"
                ref={locationRef}
              />
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-time-line"></i>
            </span>
            <div>
              <h6>Distance</h6>
              <input
                type="text"
                placeholder="Distance (km)"
                ref={distanceRef}
              />
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form__group form__group-last">
            <span>
              <i className="ri-group-line"></i>
            </span>
            <div>
              <h6>Max people</h6>
              <input
                type="number"
                min="1"
                placeholder="0"
                ref={maxGroupSizeRef}
              />
            </div>
          </FormGroup>

          <span className="search__icon" onClick={searchHandler}>
            <i className="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
