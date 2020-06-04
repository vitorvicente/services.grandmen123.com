import React from "react";
import { withStyles } from "@material-ui/styles";

import AboutHeader from "../components/AboutHeader";
import Footer from "../components/Footer";

import "../styles/main.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faStar,
  faStarHalf
} from "@fortawesome/free-solid-svg-icons";

const styles = {
  vouch: {
	"& h4": {
	  color: "#333",
	  fontWeight: "600",
	},
	"& h6": {
	  color: "blue",
	  fontWeight: "600",
	},
	paddingBottom: "25px",
  },
  stars: {
	color: "#FFD700",
	paddingBottom: "20px",
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
  padding: {
	"& h1": {
	  height: "50px",
	},
  },
};

const Vouches = ({classes}) => {
  return (
    <div>
      <AboutHeader />

      <Container>
        <Row className={classes.sectionHeader}>
		  <Col>
		    <h3>Client Vouches</h3>
			<p>Several of my previous clients were kind enough to leave a review after I worked with them! These are unaltered from their own words</p>
		  </Col>
		</Row>
      </Container>

      <Container>

        <Row className="text-center">
          <Col className={classes.vouch}>
		    <h4>VENOMOUS_CREEPER</h4>
              <h6>Server Setup</h6>
              <p>
			    <FontAwesomeIcon
                    className={classes.footerIcon}
                    icon={faQuoteLeft}
                  /> A gigantic vouch for @Grandmen123, I would 100% recommend you use his services. He makes quality setups with a quick turnaround time, and he has great communication skills. He was, and continues to be very patient with me, not once did he flame on me for the thousands of changes I asked for. He’s a total pleasure to work with, and I will probably hire him again in the future.
			  </p>
			  
              <div className={classes.stars}>
                <FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
				<FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
				<FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
				<FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
				<FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStarHalf}
                />
              </div>
		  </Col>
		  
          <Col className={classes.vouch}>
		    <h4>UKZFINESTMODDAR</h4>
              <h6>Long Term Services</h6>
              <p>
			    <FontAwesomeIcon
                    className={classes.footerIcon}
                    icon={faQuoteLeft}
                  /> Grandmen123 is a very good / dedicated staff member on servers and is always there to help out no matter what time of day of the day it is! He was a very inflating member of staff to help out my players I had on my server and would go out of his way and give up his own time / items in-game and out of game to help out in anyway possible.
			  </p>
			  
              <div className={classes.stars}>
                <FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
				<FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
				<FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
				<FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
				<FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
              </div>
		  </Col>
		  
          <Col className={classes.vouch}>
		    <h4>NOBLE PRO</h4>
              <h6>Long Term Services</h6>
              <p>
			    <FontAwesomeIcon
                    className={classes.footerIcon}
                    icon={faQuoteLeft}
                  /> Vouch. Having worked with @Grandmen123 for the last 9 months, it’s safe to say that he’s a hard-working and self-determined individual that strives to do what he can, where he can. Would definitely recommend if you are looking to hire him.
			  </p>
			  
              <div className={classes.stars}>
                <FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
				<FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
				<FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
				<FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
				<FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
              </div>
		  </Col>
        </Row>
		
        <Row className="text-center">
          <Col className={classes.vouch}>
		    <h4>ROYGATOR14</h4>
              <h6>Long Term Services</h6>
              <p>
			    <FontAwesomeIcon
                    className={classes.footerIcon}
                    icon={faQuoteLeft}
                  /> Vouch - I’ve used @Grandmen123’s services, I know he is extremely experienced, I’ve seen his work done on multiple networks and it is definitely quality.
			  </p>
			  
              <div className={classes.stars}>
                <FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
				<FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
				<FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
				<FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
              </div>
		  </Col>
		  
          <Col className={classes.vouch}>
		    <h4>BRETTPLAYMC</h4>
              <h6>Network Organisation Services</h6>
              <p>
			    <FontAwesomeIcon
                    className={classes.footerIcon}
                    icon={faQuoteLeft}
                  /> Vouch! This user is friendly and very nice! They set up a Slack server for me very quickly! I would use this user again! :)
			  </p>
			  
              <div className={classes.stars}>
                <FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
				<FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
				<FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
				<FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
				<FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStarHalf}
                />
              </div>
		  </Col>
		  
          <Col className={classes.vouch}>
		    <h4>GAURAV1234</h4>
              <h6>Long Term Services</h6>
              <p>
			    <FontAwesomeIcon
                    className={classes.footerIcon}
                    icon={faQuoteLeft}
                  /> Vouch — he worked for my network for about 16 months. Always went out of his way to get the job done, providing an excellent service every time.
			  </p>
			  
              <div className={classes.stars}>
                <FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
				<FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
				<FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
				<FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
				<FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
              </div>
		  </Col>
        </Row>
		
        <Row className="text-center">
          <Col className={classes.vouch}>
		    <h4>MILKS</h4>
              <h6>Plugin Configurations</h6>
              <p>
			    <FontAwesomeIcon
                    className={classes.footerIcon}
                    icon={faQuoteLeft}
                  /> Vouch for Grandman! He didn’t beat around the bush, he went straight to work on the configuring plugins for my Creative Server, and he even helped with a few glitches that came up. Will have more work done later.
			  </p>
			  
              <div className={classes.stars}>
                <FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
				<FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
				<FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
				<FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
				<FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
              </div>
		  </Col>
		  
          <Col className={classes.vouch}>
		  </Col>
		  
          <Col className={classes.vouch}>
		    <h4>ARRYA STARK</h4>
              <h6>Long Term Services</h6>
              <p>
			    <FontAwesomeIcon
                    className={classes.footerIcon}
                    icon={faQuoteLeft}
                  /> Vouch for Grandmen123 - He is an important part of my team in a mobile game, since he joined he has managed our Discord, and assisted with administrating the team. Great guy, really hardworking,very reliable and very fast at doing what he does, definitively would recommend.
			  </p>
			  
              <div className={classes.stars}>
                <FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
				<FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
				<FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
				<FontAwesomeIcon
                  className={classes.footerIcon}
                  icon={faStar}
                />
              </div>
		  </Col>
        </Row>
		
		<Row className={classes.padding}>
		  <Col>
		    <h1 />
		  </Col>
		</Row>
		

      </Container>

      <Footer />
    </div>
  );
};


export default withStyles(styles)(Vouches);
