<?php

/* ==================================================
# Get form input values
===================================================*/

$fullname = $_POST['fullname'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (!empty($fullname) && !empty($phone) && !empty($email) && !empty($subject) && !empty($message)) { // If email and message fields are not empty
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) { // If user email is valid
            $receiver = "prospermbuma@gmail.com"; // Receiver email address
            $subject_From = "From: $fullname <$email>"; // Subject of the email
            // Merging concating all user values  inside body  variable. \n is used fo new line
            $body = "Name: $fullname\nEmail: $email\nPhone: $phone\nSubject: $subject\nMessage: $message";
            $sender = "From: $email"; // Sender of the email
            if (mail($receiver, $subject_From, $body, $sender)) { // mail() is an inbulit php function to send email
                echo "Your message has been sent successfully";
            } else {
                echo "Sorry, failed to send your message!";
            }
        } else {
            echo "Enter a valid email address";
        }
    } else {
        echo "Fields can not be blank";
    }
}
