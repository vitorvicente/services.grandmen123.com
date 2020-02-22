<?php
$name = $_POST['name'];
$email = $_POST['email'];
$package = $_POST['package'];
$details = $_POST['details'];
$formcontent=" From: $name \n Package: $package \n Details: $details";

$recipient = "vitor@bu.edu";
$subject = "Contact Form - VitorVicente.com";
$mailheader = "From: $email";


mail($recipient, $subject, $formcontent, $mailheader);
header("Location: ../../services/services/others/order/")
?>
