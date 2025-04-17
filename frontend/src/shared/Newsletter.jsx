import React from "react";
import './newsletter.css';

import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg='6'>
            <div className="newsletter__content">
              <h2>Welcome to our travel web app.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ut aspernatur eum ex, ipsum alias harum obcaecati a reprehenderit, 
                doloribus sint perferendis explicabo magni repellat, 
                nobis velit quas pariatur eos voluptas?
              </p>
            </div>
          </Col>

          <Col lg="6">
            <div className="newsletter__img"> 
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
