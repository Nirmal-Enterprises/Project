<?php
$to      = 'vicksjain2@gmail.com';
$subject = 'From: '.$_POST['email'].' -'.$_POST['subject'].' -Nirmal enterprises enquiry' ;
$message = $_POST['enquiry'];
$Cc='tapeshkumar93@gmail.com';



$headers = 'From:'.$_POST['email']. "\r\n"  .    'Reply-To:'.$_POST['email']. "\r\n" .
 'Cc:'.$Cc. "\r\n" .  'X-Mailer: PHP/' . phpversion();
$headers .= 'Cc:'. $Cc."\r\n";


$sendMail = mail($to, $subject, $message, $headers);
        if ($sendMail == true){
        echo "success";
header('location: http://nirmalenterprises.co/#!/contactus');
        }
        else{echo 'unsuccessful';}
?>