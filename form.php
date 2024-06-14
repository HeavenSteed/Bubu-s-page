<?php

use PHPMailer\PHPMailer\PHPMailer;

$mail = new PHPMailer();

require_once './vendor/autoload.php';

if ($_POST["submit"]) {
  $recipient = "valdergrei@gmail.com";
  $subject = "Form to email message";

  // Access form data
  $sender = $_POST["name"];
  $senderEmail = $_POST["email"];
  $message = $_POST["message"];

  $mailBody = "Name: $sender\nEmail: $senderEmail\n\n$message";

  mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

  $thankYou = "<p>Thank you! Your message has been sent.</p>";
}


?>