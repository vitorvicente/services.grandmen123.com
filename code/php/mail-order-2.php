<?php
$name = $_POST['name'];
$email = $_POST['email'];
$net = $_POST['network'];
$request = $_POST['request'];
$details = $_POST['details'];
$formcontent=" From: $name \n Network: $net \n Request: $request \n Details: $details";

$recipient = "vitor@bu.edu";
$subject = "Contact Form - VitorVicente.com";
$mailheader = "From: $email";


mail($recipient, $subject, $formcontent, $mailheader);
header("Location: ../../services/services/minecraft/other-order/")
?>
