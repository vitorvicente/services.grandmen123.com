require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
const PORT = process.env.PORT || 3030;

//Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//Email API
app.post('/api/email/contactForm', (req, res) => {
	console.log(req.body);
	
	const msg = {
		to: 'vitor@bu.edu',
		from: 'no-reply@emails.grandmen123.com',
		subject: req.body.subject,
		text: req.body.text
	};
	
    sgMail.send(msg).then(() => {
		console.log('Message sent')
	}).catch((error) => {
		console.log(error.response.body)
	});

});




//Listing
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
