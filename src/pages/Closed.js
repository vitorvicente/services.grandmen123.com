import React from "react";
import { withStyles } from "@material-ui/styles";

import "../styles/main.css";
import img from "../assets/avatar.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const styles = {
  aboutExtra: {
	paddingTop: "60px",
	paddingBottom: "60px",
	"& h1": {
	  fontWeight: "600",
      fontSize: "50px",
	},
	textAlign: "center",
  },
  imgFluid: {
	borderRadius: "20px",
	paddingBottom: "50px",
  },
};

const Closed = ({classes}) => {
  return (
    <div>
      <Container>

        <Row className={classes.aboutExtra}>
		  <Col>
		  
		    <img src={img} className={classes.imgFluid} alt="Landing Image 1" width="50%" />
		  
            <h1> We're currently closed! </h1>
		    <p>
		      Sorry for the inconvenience but I'm currently closed and taking on no further comissions! If you'd like to contact me with some urgency, please email me at grandmen123@hotmail.com so I can get to your request, but please not that there is no guarantee of me taking any requests outside of those from my VIP clients.
		    </p>
		    <p>
		      <strong>If you're a VIP client, please contact me directly via Discord/Slack/Email, and I will answer back ASAP!</strong>
		    </p>
			
		  </Col>
        </Row>
		

      </Container>
    </div>
  );
};


export default withStyles(styles)(Closed);
