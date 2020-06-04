import React from "react";
import { withStyles } from "@material-ui/styles";

import AboutHeader from "../components/AboutHeader";
import Footer from "../components/Footer";

import "../styles/main.css";
import img from "../assets/vip.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const styles = {
  sectionHeader: {
	"& h3": {
	  fontSize: "36px",
      color: "#283d50",
      textAlign: "center",
      fontWeight: "500",
      position: "relative",
	},
  },
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

const Vip = ({classes}) => {
  return (
    <div>
      <AboutHeader />

      <Container>
        <Row className={classes.sectionHeader}>
		  <Col>
		    <h3>VIP Status</h3>
		  </Col>
		</Row>
      </Container>

      <Container>

        <Row className={classes.aboutExtra}>
          <Col>
			<h4> Overview </h4>
			
            <p>
			 Having worked as a freelancer for over two years now, I've learned that giving back to my clients is an incredibly important thing, as they are the ones that support me and my work! That is why I created the VIP Client Status, which rewards my most loyal clients for their continuous support!
			</p>
			<p>
			 This status comes with some pretty awesome perks for those who decide to use my services on a regular basis, including discounts and extended warranties.
			</p>
          </Col>
		  
		  <Col lg={3}>
		    <img src={img} className={classes.imgFluid} alt="Landing Image 1" width="75%" />
		  </Col>
        </Row>
		
		
		<Row className={classes.aboutExtra}>
		  <Col>
		    <hr />
		  </Col>
		</Row>
		
		<Row className={classes.aboutExtra}>
		  <Col>
		    <h4 className="text-center">Requirements</h4>
			
			<h5>
			  In order to obtain the VIP status, a client must fulfill one of the following requirements:
			</h5>
			<p>- Ordered 1 MC related service valued above $150 with a vouch </p>
			<p>- Ordered 10 MC related services valued above $20 each and provided at least 1 vouch</p>
			<p>- Signed a contract for long-term services for over 6 months and provided a vouch</p>
			<p>- Ordered 1 non-MC service valued above $500 with a vouch</p>
			<p>- Ordered 5 non-MC services valued above $150 each and provided at least 1 vouch</p>
			<p>- Reached a personal agreement with me</p>
		  </Col>
		  
		  <Col>
		    <h4 className="text-center">Perks</h4>
			
			<h5>
		      Once a client achieves VIP Status, they get exclusive access to the following perks:
			</h5> 
			<p>- Priority request handling</p>
			<p>- Premium support</p>
			<p>- x2 Warranty length for any service</p>
			<p>- Special direct access to me via Discord</p>
			<p>- 20% off any MC related order above $250</p>
			<p>- 20% off any non-MC related order above $500</p>
			<p>- Access to special temporary offers</p>
		  </Col>
		</Row>
		

      </Container>

      <Footer />
    </div>
  );
};


export default withStyles(styles)(Vip);
