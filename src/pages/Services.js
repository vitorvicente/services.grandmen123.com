import React from "react";
import { withStyles } from "@material-ui/styles";

import AboutHeader from "../components/AboutHeader";
import Footer from "../components/Footer";

import "../styles/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ROUTES from "../constants/Routes"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import img1 from "../assets/mc-services.jpg";
import img2 from "../assets/home2.jpg";

const styles = {
  about: {
	background: "#fff",
    padding: "60px 0",
  },
  card: {
	position: "relative",
	textAlign: "center",
    overflow: "hidden",
    borderRadius: "7px",
    margin: "0 10px 40px 10px",
    boxShadow: "0 10px 29px 0 rgba(68, 88, 144, 0.1)",
    transition: "all 0.3s ease-in-out",
	"&:hover": {
	  "-webkit-transform": "translateY(-5px)",
      transform: "translateY(-5px)",
	  "& .card-title": {
		"& a": {
		  color: "#007bff",
		},
	  },
	},
	"& .card-title": {
	  "& a": {
		color: "#111",
	  },
	},
  },
  sectionHeader: {
	"& h3": {
	  fontSize: "36px",
      color: "#283d50",
      textAlign: "center",
      fontWeight: "500",
      position: "relative",
	},
	"& p": {
	  textAlign: "center",
      margin: "auto",
      fontSize: "15px",
      paddingBottom: "60px",
      color: "#556877",
      width: "50%",
	},
  },
  btn: {
	fontSize: "14px",
	fontWeight: "800",
	padding: "15px 25px",
	letterSpacing: "1px",
	textTransform: "uppercase",
	borderRadius: "10px",
	fontFamily: "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
	backgroundColor: "#333",
	borderColor: "#333",
	color: "#fff",
	"&:hover": {
	  backgroundColor: "#292b2c",
	  borderColor: "#292b2c",
	  color: "#fff",
	  textDecoration: "none",
	},
  },
  btnWrapper: {
	paddingTop: "15px",
	paddingBottom: "15px",
  },
};

const Services = ({classes}) => {
  return (
    <div>
      <AboutHeader />

      <Container>
        <Row className={classes.sectionHeader}>
		  <Col>
		    <h3>Service Shop</h3>
			<p>The services I provide fall into two distinct sectors, those related to the Minecraft industry, in which I have worked for over 5 years; and those outside this sphere, which I have only recently started to provide, as I entered college and gained enough experience in these fields.</p>
		  </Col>
		</Row>
      </Container>

      <Container className={classes.about}>
	  
		<Row className={classes.serviceBoxes}>

          <Col lg={6}>
            <div className={classes.card}>
              <img src={img1} className="card-img-top" alt="Landing Image 1" />
              <div className="card-body">
                <h3 className="card-title"><a href="#">Minecraft Services</a></h3>
                <p className="card-text">Due to my extended experience, I am able to offer a plethora of different services in the Minecraft industry, from server setups to network organization services.</p>
				<div className={classes.btnWrapper}>
                   <a href={ROUTES.MC} className={classes.btn}>Learn More</a>
				</div>
              </div>
            </div>
          </Col>
		  
          <Col lg={6}>
            <div className={classes.card}>
              <img src={img2} className="card-img-top" alt="Landing Image 1" />
              <div className="card-body">
				<h3 className="card-title"><a href="#">Other Services</a></h3>
                <p className="card-text">With my recent entery in college, I expanded my service offerings to include things such as Web and App development, as well as services like consultation.</p>
                <div className={classes.btnWrapper}>
                   <a href={ROUTES.NMC} className={classes.btn}>Learn More</a>
				</div>
              </div>
            </div>
          </Col>

        </Row>
	  
      </Container>

      <Footer />
    </div>
  );
};


export default withStyles(styles)(Services);
