<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message']) && isset($_POST['contact'])) {
    $name = $_POST['name'];
    $tel = $_POST['contact'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $body = "<p>Name: {$name}</p><p>Email: {$email}</p><p>Contact: {$tel}</p><p>Message: {$message}</p>";

    require_once "../PHPMailer/vendor/autoload.php";

    $mail = new PHPMailer();

    //SMTP settings
    $mail->SMTPDebug = 0; 
    $mail->isSMTP();
    $mail->Host = "smtp.hostinger.com";
    $mail->SMTPAuth = true;
    $mail->Username = "contact@draperjeans.com";
    $mail->Password = "Draper@contact1212";
    $mail->SMTPSecure = "ssl";
    $mail->Port = 465;

    $mail->From = "contact@draperjeans.com";
    $mail->FromName = $name;

    $mail->addAddress("contact@draperjeans.com");

    //email settings
    $mail->isHTML(true);
    
    $mail->Subject = ("mail subject");
    $mail->telephone= ("telephone");
    $mail->Body = $message;

    try {
        $mail->send();
        //echo "Message has been sent successfully";
        $status= "success";
    } catch (Exception $e) {
        //echo "Mailer Error: " . $mail->ErrorInfo;
        $status= "fail";
    }
    exit(json_encode(array("status" => $status)));

}