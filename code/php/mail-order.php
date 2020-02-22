<?php
$name = $_POST['name'];
$email = $_POST['email'];
$net = $_POST['network'];
$package = $_POST['package'];
$details = $_POST['details'];
$formcontent=" From: $name \n Network: $net \n Package: $package \n Details: $details";

$recipient = "vitor@bu.edu";
$subject = "Contact Form - VitorVicente.com";
$mailheader = "From: $email";


mail($recipient, $subject, $formcontent, $mailheader);
header("Location: ../../services/services/minecraft/order/")
?>
