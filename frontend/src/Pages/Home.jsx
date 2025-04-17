import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg01 from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";
import Subtitle from "../shared/Subtitle";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedDestinationList from "../components/Featured-Destinations/FeaturedDestinationList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  console.log("Home page loaded"); // Debugging log

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Adventure Awaits Be Ready"} />
                  <img src={worldImg} alt="World Map" />
                </div>

                <h1>
                  Wander the world, build beautiful
                  <span className="highlight"> memories </span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Mollitia quam perferendis libero quae esse consequatur, quaerat
                  repellat ab, id maxime, saepe corrupti quo temporibus rem
                  laboriosam amet adipisci ea modi?
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg01} alt="Travel Scene 1" />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box mt-2">
                <video src={heroVideo} controls />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box mt-1">
                <img src={heroImg02} alt="Travel Scene 2" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__destination-title">
                Our featured destinations
              </h2>
            </Col>
            <FeaturedDestinationList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With all our experience <br /> We will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Quas aliquim, hit tempora inventore suscipit unde.
                </p>
              </div>

              <div className="counter__wraper d-flex align-items-centre gap-5">
                <div className="counter__box">
                  <span>5+k</span>
                  <h6>Successful trip</h6>
                </div>
                <div className="counter__box">
                  <span>1+k</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>5</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>

            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="Experience" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customers destination gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">
                What our customers say about us
              </h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter />
    </>
  );
};

export default Home;
