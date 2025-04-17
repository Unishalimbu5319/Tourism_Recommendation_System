import React from "react";
import DestinationCard from "../../shared/DestinationCard";

import { Col } from "reactstrap";

import useFetch from "./../../hooks/useFetch";
import { BASE_URL } from "./../../utils/config";

const FeaturedDestinationList = () => {

  const {
    data: FeaturedDestinations, 
    loading, 
    error,
    } = useFetch('${BASE_URL}/destinations/search/getFeaturedDestinations');

   console.log(FeaturedDestinations);

   return ( 
    <>
      {loading && <h4>Loading.........</h4>}
      {error && <h4>{error}</h4>}
      {!loading && 
       !error &&
       FeaturedDestinations?.map( destination => (
        <Col lg="3" className="mb-4" key={destination._id}>
          <DestinationCard destination={destination} />
        </Col>
      ))}
    </>
  );
};

export default FeaturedDestinationList;