import React from "react";
import { withStyles } from "@material-ui/styles";

import AboutHeader from "../components/AboutHeader";
import Footer from "../components/Footer";

import "../styles/main.css";

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

const Tos = ({classes}) => {
  return (
    <div>
      <AboutHeader />

      <Container>
        <Row className={classes.sectionHeader}>
		  <Col>
		    <h3>Terms and Services</h3>
		  </Col>
		</Row>
      </Container>

      <Container>

        <Row className={classes.aboutExtra}>
          <Col>
			<h4> Upon hiring me for any of my services you agree to the following terms: </h4>
			
            <p> - All transactions must be made via paypal, you will be invoiced for your payment </p>
			<p> - 50% of my fees must be paid up-front and the remaining 50% once the work is completed </p>
			<p> - Only after the final 50% is paid will I deliver the finished product </p>
			<p> - If the final payment is not completed, I reserve the right to withold my work </p>
			<p> - I reserve the right to refuse work with cracked software </p>
			<p> - I will not provide any paid software, these must be purchased by my client </p>
			<p> - I will not provide any builds for any server setup </p>
			<p> - Any hosting required must be provided by the client </p>
			<p> - You, as the client, will not redistribute by any work completed by me </p>
			<p> - You, as the client, will not claim any work completed by me as your own </p>
			<p> - No refunds or chargebacks are allowed unless I am not able to complete the work as first agreed upon </p>
			<p> - Once the work is complete, any further extensive changes will result in extra charges </p>
			<p> - All works include a warranty period, in which any bugs found will be resolved free of charge </p>
			<p> - All legal conflicts regarding any orders will be resolved discretely with the involvement of my legal team </p>
			<p> - All client data gathered during the process will be maintained only until the end of the warranty period </p>
			<p> - Any and all data collected is protected and will not be redistributed without the permission of the client </p>
			<p> - I reserve the right to grant or revoke the VIP status of any client </p>
			<p> - I reserve the right to change what is included in each package, without affecting current orders </p>
			<p> - I reserve the right to change the ToS at any time </p>
          </Col>
        </Row>

      </Container>

      <Footer />
    </div>
  );
};


export default withStyles(styles)(Tos);
