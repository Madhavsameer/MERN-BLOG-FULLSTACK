import React from "react";
// import "./Styles/about.css";
import { Container, Row, Col } from "reactstrap";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section id="2">
      <Container>
        <Row>
          <Col lg="6" ml="6" >
            <div className="about__img">
              <img src={"/Images/about-us.png"} alt="" className="w-100" />
            </div>
          </Col>

          <Col>
            <div className="about__content">
              <h2>Know About Us..😊</h2>
              <br />
              <p>
                This Website is Developed By Domain Students of Centurion University.
                We are Continuously working For making this web make and feel 
                Bettter for our users there.
              </p>
              <br />

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={3} suffix="K" />
                    </span>

                    <p className="counter__title">Completed Projects</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={3} suffix="M" />
                    </span>

                    <p className="counter__title">Our Students Around the World</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={95} duration={3} suffix="M" />
                    </span>

                    <p className="counter__title">Ideas Raised Funds</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Categories Served</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
