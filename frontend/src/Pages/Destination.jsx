import React, { useState, useEffect } from "react";
import CommonSection from "../shared/CommonSection";

import "../styles/destination.css";
import destinations from "../assets/data/destination.json";
import DestinationCard from "../shared/DestinationCard";
import SearchBar from "../shared/SearchBar";
import Newsletter from "../shared/Newsletter";
import { Container, Row, Col } from "reactstrap";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const Destination = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {
    data:destinations,
    loading, 
    error,
   } = useFetch('${BASE_URL}/destinations?page=${page');
  const {data:destinationCount} = useFetch('${BASE_URL}/destinations/search/getDestinationByCount')

  useEffect(() => {
    const Pages = Math.ceil(destinationCount / 8); 
    setPageCount(Pages);
    window.scrollTo(0,0)
  }, [page, destinationCount, destinations]);

  return (
    <>
      <CommonSection title={"All Destinations"} />

      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>

          { loading && <h4 className="text-centre pt-5">Loading.........</h4>  }
          { error && <h4 className="text-centre pt-5">.error</h4>  }
          {
            !loading && !error && <Row>
            {destinations?.map((destination) => (
              <Col lg="3" md="4" sm="6" className="mb-4" key={destination._id}>
                <DestinationCard destination={destination} />
              </Col>
            ))}

            <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map((number) => (
                  <span
                    key={number}
                    onClick={() => setPage(number)}
                    className={page === number ? "active-page" : ""}
                    style={{ cursor: "pointer", padding: "0.5rem" }}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
          }

     
          




          
        </Container>
      </section>

      <Newsletter />
    </>
  );
};

export default Destination;
