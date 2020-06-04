import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { withStyles } from "@material-ui/styles";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import img from "../assets/header.jpg";
import "../styles/main.css";

const styles = {
  mainNav: {
    paddingTop: "15px",
    paddingBottom: "15px",
    backgroundColor: "#fff",
    transition: "all 0.5s",
    boxShadow: "0px 0px 30px rgba(127, 137, 161, 0.3)",
  },
  mainNavBrand: {
    "& span": {
	  fontFamily: "Montserrat, sans-serif",
      fontSize: "36px",
      margin: 0,
      lineHeight: 1,
      fontWeight: 400,
      letterSpacing: "3px",
      textTransform: "uppercase",
      transition: "all .3s",
	  color: "#00366f",
      textDecoration: "none",
      "@media only screen and (max-width:992px)": {
        paddingLeft: "20px",
      },
      "@media only screen and (min-width:992px)": {
        paddingLeft: "350px",
      },
      "&:hover": {
        color: "#0b6bd3",
        textDecoration: "none",
      },
    },
  },
  mainNavLinks: {
    fontSize: "15px",
    paddingRight: "350px",
  },
  mainNavActiveLink: {
	fontFamily: "Montserrat, sans-serif",
    paddingLeft: "30px",
	fontWeight: "500",
    color: "#007bff",
    "& span": {
      paddingLeft: "30px",
      color: "#007bff",
    },
  },
  mainNavLinksLink: {
	fontFamily: "Montserrat, sans-serif",
    paddingLeft: "30px",
	fontWeight: "500",
    color: "#004289",
    "&:hover": {
      color: "#007bff",
      textDecoration: "none",
    },
    "& span": {
      paddingLeft: "30px",
      color: "#004289",
      "&:hover": {
        color: "#007bff",
        textDecoration: "none",
      },
    },
  },
  overlay: {
	marginRight: "0px",
	height:"100%",
	width:"100%",
	backgroundColor:"#212529",
	opacity:".5",
  },
  masthead: {
    marginBottom: "50px",
    background: "no-repeat center center",
    backgroundColor: "#868e96",
    backgroundAttachment: "scroll",
    position: "relative",
    backgroundSize: "cover",
	height: "500px",
    backgroundImage: `url(${img})`,
  },
  mastheadSiteHeading: {
	textAlign: "center",
    padding: "100px 0 100px",
    color: "#fff",
    "@media only screen and (min-width:768px)": {
      padding: "200px 0!important",
    },
	"& h1": {
	  fontSize:"100px",
	  marginTop:0,
	  "@media only screen and (min-width:768px)": {
	    fontSize: "80px !important",
	  },
	},
  },
};



const AboutHeader = ({classes}) => (
  <div>
  
    <div>
      <Navbar collapseOnSelect className={classes.mainNav} expand="lg">
        <Navbar.Brand className={classes.mainNavBrand} href="/">
          <span>Grandmen123</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navbarResponsive" className="ml-auto">
          <div className="ml-auto">
            <Nav className={classes.mainNavLinks}>
              <Nav.Link className={classes.mainNavLinksLink} href="/">
                <span>Home</span>
              </Nav.Link>
			  <Nav.Link className={classes.mainNavActiveLink} href="about">
                <span>About Me</span>
              </Nav.Link>
			  <Nav.Link className={classes.mainNavLinksLink} href="services">
                <span>Services</span>
              </Nav.Link>
              <Nav.Link className={classes.mainNavLinksLink} href="contact">
                <span>Contact</span>
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  
    <div className={classes.masthead}>
	  <div className={classes.overlay} />
      <Container>
        <Row>
          <Col>
            <div className={classes.mastheadSiteHeading}>
			</div>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default withStyles(styles)(AboutHeader);
