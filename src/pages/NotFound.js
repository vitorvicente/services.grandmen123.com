import React from "react";
import { withStyles } from "@material-ui/styles";

import "../styles/main.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const styles = {
  aboutExtra: {
	paddingTop: "200px",
	paddingBottom: "60px",
	"& h1": {
	  fontWeight: "600",
      fontSize: "100px",
	  paddingBottom: "100px",
	},
	"& p": {
	  fontSize: "20px",
	  paddingBottom: "50px",
	},
	textAlign: "center",
  },
  imgFluid: {
	borderRadius: "20px",
	paddingBottom: "50px",
  },
  btn: {
	fontSize: "14px",
	fontWeight: "800",
	padding: "15px 25px",
	letterSpacing: "1px",
	textTransform: "uppercase",
	borderRadius: "10px",
	fontFamily: "Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
	backgroundColor: "#0085a1",
	borderColor: "#0085a1",
	"&:hover": {
	  color: "#fff",
	  backgroundColor: "#00657b!important",
	  borderColor: "#00657b!important",
	}
  },
};

const NotFound = ({classes}) => {
  return (
    <div>
      <Container>

        <Row className={classes.aboutExtra}>
		  <Col>
		  
            <h1> 404 Error </h1>
		    <p>
		      Whoops, you seem to have tried to reach someplace that doesn't exist! Hit the button bellow to go back to the website!
		    </p>
		    
			<div>
              <Button
                className={classes.btn}
                href="/"
              >
                Learn More
              </Button>
            </div>
			
		  </Col>
        </Row>
		

      </Container>
    </div>
  );
};


export default withStyles(styles)(NotFound);
