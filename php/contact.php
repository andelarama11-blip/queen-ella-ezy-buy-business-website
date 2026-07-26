<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Change this email address
    $to = "your@email.com";

    $email_subject = "Website Contact Form: " . $subject;

    $email_body = "
    Name: $name

    Email: $email

    Subject: $subject

    Message:
    $message
    ";

    $headers = "From: $email";

    if(mail($to,$email_subject,$email_body,$headers)){

        echo "
        <script>
        alert('Message Sent Successfully!');
        window.location.href='../contact.html';
        </script>
        ";

    }else{

        echo "
        <script>
        alert('Failed to send message.');
        window.location.href='../contact.html';
        </script>
        ";

    }

}
?>