import React, {useState} from "react";

import CommonSection from './../shared/CommonSection';
import { Container, Row,Col } from 'reactstrap';

import { useLocation } from "react-router-dom";
import DestinationCard from './../shared/DestinationCard';

import Newsetter from './../shared/Newsletter';


const SearchResultList = () => {

const location = useLocation();

  const [data] = useState(location.state)

  console.log(data);

    return (
    <>
      <CommonSection title={"Destination Search Result"} />
      <section>
        <Container>
            <Row>
                {
                    data.length === 0 ? <h4 className="text-centre">No destination found</h4> :data ?.map(destination=>
                     <Col lg = "3" className="mb-4" key={destination._id}>

                        <DestinationCard destination ={destination} /> </Col>)
                }
            </Row>
        </Container>
      </section>
      <Newsetter />
    </>
 );   
};

export default SearchResultList;