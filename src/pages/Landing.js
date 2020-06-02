import React from "react";

import HomeHeader from "../components/HomeHeader";
import Footer from "../components/Footer";

import "../styles/main.css";
import img1 from "../assets/home1.jpg";
import img2 from "../assets/home2.jpg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const MainLanding = () => {
  return (
    <div className="landing">
      <HomeHeader />

      <Container>
        <Row>
		</Row>
      </Container>

      <Container>

        <Row className="about-extra">
          <Col>
            <img src={img1} alt="Landing Image 1" width="100%" />
          </Col>
          <Col>
			<h4>Who Am I?</h4>
            <p>
              My name is Grandmen123, and for the past 5 years I've worked alongside countless communities and servers as a System Administrator and Manager! This has allowed me to gain extensive knowledge of the inner works of a active and thriving Minecraft server network.
            </p>
            <p>
              In addition to this, my experience in Computer Science that I gained both working and in college as allowed me begin offering services outside the Minecraft Server universe.
            </p>
			
			<div className="buttonBlock text-center">
              <Button
                className="btn btn-info btn-home"
                href="https://github.com/BUUPE/"
              >
                Learn More
              </Button>
            </div>
			
          </Col>
        </Row>

        <Row className="about-extra">
          <Col>
            <h4>My service shop</h4>
            <p>
             After my extensive work for several networks I decided to launch myself into the free-lancing world, with a goal to provide high quality services at affordable prices.
            </p>
            <p>
              This led me to the creation of XSetups, which allows me to still work and do what I love, and have enough time to dedicate to school and my life.
            </p>
			
			<div className="buttonBlock text-center">
              <Button
                className="btn btn-info btn-home"
                href="https://github.com/BUUPE/"
              >
                Learn More
              </Button>
            </div>
			
          </Col>
		  
		  <Col>
		    <img src={img2} alt="Landing Image 2" width="100%" />
          </Col>
          
        </Row>
		

      </Container>

      <Footer />
    </div>
  );
};

export default MainLanding;
