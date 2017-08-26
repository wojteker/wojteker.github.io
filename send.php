<?php
$to      = 'wradziszewski66@gmail.com';
$name    = $_POST['name'];
$email   = $_POST['email'];
$subject = 'Formularz wojteker.pl od '.$name.' '.$email;
$message = $_POST['text'];
$headers = 'Formularz wojteker.pl od '.$name.' '.$email;
$headers .= 'Content-Type: text/html: charset=utf-8\r\n';

mail($to, $subject, $message, $headers);
?>