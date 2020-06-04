import React from "react";
import { withStyles } from "@material-ui/styles";

import AboutHeader from "../components/AboutHeader";
import Footer from "../components/Footer";

import "../styles/main.css";
import img1 from "../assets/avatar.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const styles = {
  aboutExtra: {
	paddingTop: "50px",
	paddingBottom: "50px",
	"& h4": {
	  fontWeight: "600",
      fontSize: "24px",
	  paddingBottom: "10px",
	},
	"& hr": {
	  paddingBottom: "60px",
	  color: "#333",
	  height: "5px",
	}
  },
  imgFluid: {
	borderRadius: "20px",
  },
  btn: {
	fontSize: "14px",
	fontWeight: "800",
	padding: "15px 25px",
	letterSpacing: "1px",
	textTransform: "uppercase",
	borderRadius: "10px",
	fontFamily: "Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
	backgroundColor: "#7f7f7f",
	borderColor: "#7f7f7f",
	transition: "all 0.3s ease-in-out",
	"&:hover": {
	  color: "#fff",
	  backgroundColor: "#444444!important",
	  borderColor: "#444444!important",
	}
  },

};

const About = ({classes}) => {
  return (
    <div>
      <AboutHeader />

      <Container>

        <Row className={classes.aboutExtra}>
          <Col>
			<h4>About Me?</h4>
            <p>
              My name is Grandmen123, but I go by Grand. I'm a student at Boston University, but originally I'm from Portugal. I have a huge passion for tech, gaming and, more recently, aviation.
            </p>
            <p>
             For the past 5 years I've worked alongside countless communities in the Minecraft Server industry. Despite my main job as a System Administrator, I've worked as a Community Manager, Developer, Support Specialist, and many more. 
            </p>
          </Col>
		  <Col lg={4}>
            <img src={img1} className={classes.imgFluid} alt="Landing Image 1" width="100%" />
          </Col>
        </Row>

        <Row className={classes.aboutExtra}>
          <Col lg={10}>
            <h4>Free-lancing Services Shop</h4>
            <p>
             When I got into my last year of Highschool, continuous work became rather difficult, as I attempted to balance both my IRL life and my work. This led me to take a break from the industry, but after my application season ended, I decided it was time to get back into the swing of thing, but instead of working for another community, I decided to open a free-lancing service shop.
            </p>
            <p>
             My objective in this endeavour is to provide top quality services at an extremely afordable pricing, so that I can help server owners and community leaders to improve the experience of their users.
            </p>
			<p>
			 With my recent entry into university, I began expanding my horizons to works in other areas, such as Web Development!
			</p>
			<p>
			 As I went along, I decided to begin giving back to my clients, and that led me to create a VIP status, which holds certain perks for loyal clients, including discounts! If you want to find out more, go down bellow.
			</p>
          </Col>  
        </Row>
		
		<Row className={classes.aboutExtra}>
		  <Col>
		    <hr />
			<h4>Other Information</h4>
		  </Col>
		</Row>
		<Row className={classes.aboutExtra}>
		  <Col className="text-center">
		    <div>
              <Button
                className={classes.btn}
                href="/about/Tos"
              >
                Terms Of Services
              </Button>
            </div>
		  </Col>
		  <Col className="text-center">
		    <div>
              <Button
                className={classes.btn}
                href="/about/VIP"
              >
                VIP Status
              </Button>
            </div>
		  </Col>
		  <Col className="text-center">
		    <div>
              <Button
                className={classes.btn}
                href="/about/Vouches"
              >
                Vouches
              </Button>
            </div>
		  </Col>
		</Row>
		
		<Row className={classes.aboutExtra}>
		  <Col>
		    <hr />
		  </Col>
		</Row>
		

      </Container>

      <Footer />
    </div>
  );
};


export default withStyles(styles)(About);
