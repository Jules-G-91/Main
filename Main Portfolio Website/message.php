<?php
//Getting all form values
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$website = $_POST['website'];
$message = $_POST['message'];


if(!empty($email) && !empty($message)) { //If the email and message field is not empty
    if(filter_var($email, FILTER_VALIDATE_EMAIL)) { //If the user entered email address is valid
        $receiver = "julian.b.goodman@hotmail.co.uk"; //Email receiver email address
        $subject = "From: $name <$email>"; //Subject of the email. Subject looks like 'From: Julian Goodman <abcd123@gmail.com>
        //Merging or concatenating all user values inside body variable. '\n' is used for creating a new line.
        $body = "Name: $name\nEmail: $email\nPhone: $phone\nWebsite: $website\n\nMessage: $message\n\nRegards,\n$name";
        $sender = "From: $email"; //Sender email
        if(mail($receiver, $subject, $body, $sender)) { //mail() is an in-built php function to send mail
            echo "Your message has been sent successfully!";
        }else {
            echo "Sorry, failed to send your message!";
        }
    }else {
        echo "Enter valid email address!";
    }
}else {
    echo "Email and password fields are required!";
}

?>