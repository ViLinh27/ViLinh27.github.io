<?php
  if(isset($_POST['submit'])){
      $fname = $_POST['firstname'];
    $lname= $_POST['lastname'];
    $visitor_email = $_POST['sendermail'];
    $country = $_POST['country'];
    $emailformsubject = $_POST['subject'];
    $message = $_POST['message'];

    $to = "vilinh27@gmail.com";

    $subject = "New Message from ".$fname.$lname;

    $body = "From: ".$fname.$lname." (".$visitor_email.")\n";
    $body .= "Their Subject: ".$emailformsubject."\nCountry: ".$country."\nMessage:\n".$message;

     if(mail($to,$subject,$body)) {
        echo("Thank You! Your message has been sent.");
    } else {
        echo("Sorry, there was a problem sending your message.");
    }
    }
?>
