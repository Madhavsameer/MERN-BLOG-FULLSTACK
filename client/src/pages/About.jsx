import React from "react";
import { Container, Row, Col } from "reactstrap";
import CountUp from "react-countup";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6">
            <div className="about__img">
              <img src="https://avatars.githubusercontent.com/u/111692125?v=4" alt="" className="w-100" />
              
              
            </div>
          </Col>

          <Col lg="6">
            
             
              <div className="about__counter">
                <div className="d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={3} suffix="K" />
                    </span>
                    <p className="counter__title">Globally followers on blogs</p>
                  </div>
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={3} suffix="M" />
                    </span>
                    <p className="counter__title">Overall views on blog</p>
                  </div>
                </div>
                <div className="d-flex gap-5 align-items-center">
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
                  
              <br />
              <div className='about__content'>
              <h1> <b>Know About Us..😊</b></h1>
              <br />
              <p>
                This blogging application is designed & developed by me.
                On this blog, you'll find weekly articles and tutorials on 
                topics such as web development, software engineering, and programming
                languages. Sahand is always learning and exploring new
                technologies, so be sure to check back often for new content!
              </p>
              <br />
              <p>
                We encourage you to leave comments on our posts and engage with
                other readers. You can like other people's comments and reply to
                them as well. We believe that a community of learners can help
                each other grow and improve.
              </p>
              </div>
                </div>
              </div>
            
          </Col>
          
        </Row>
        
        <br />
        <br />
      </Container>
    </section>
  );
};

export default About;
