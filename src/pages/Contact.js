import React from "react";
import { withStyles } from "@material-ui/styles";

import ContactHeader from "../components/ContactHeader";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm"

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
	"& p": {
	  textAlign: "center",
      margin: "auto",
      fontSize: "15px",
      paddingBottom: "60px",
      color: "#556877",
      width: "50%",
	},
  },

};

const Contact = ({classes}) => {
  return (
    <div>
      <ContactHeader />

      <Container>
        <Row className={classes.sectionHeader}>
		  <Col>
		    <h3>Contact Me</h3>
			<p>If you have inquiries, questions, or are looking for a business partner fill out the form bellow to contact me</p>
		  </Col>
		</Row>
      </Container>

      <Container>

        <ContactForm />

      </Container>

      <Footer />
    </div>
  );
};


export default withStyles(styles)(Contact);
