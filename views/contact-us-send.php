<?php
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    //echo $postdata;
//print_r($request);
//echo $request[to];
    @$name = $request->name;
    @$to = $request->to;
    @$cc = $request->cc;
    @$email = $request->email;
    @$phone = $request->phone;
    @$enquiry = $request->enquiry;
    
    
    $subject = 'Enquiry From : '.$email.' -Nirmal enterprises' ;
    
    // To send HTML mail, the Content-type header must be set
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
     
    $headers .= 'From:'.$email. "\r\n"  .    'Reply-To:'.$email. "\r\n" .
 'Cc:'.$cc. "\r\n" .  'X-Mailer: PHP/' . phpversion();
$headers .= 'Cc:'. $cc."\r\n";
 //  echo $subject;
//echo $headers; 

$message = '<html>';
$message .= '<body style="margin:0;font-family: "Ubuntu Condensed", sans-serif;">';
$message .= '<table border="0" style="border:1px solid #03639b;width: 100%;">';
$message .= '<tbody>';
$message .= '<tr style="border-bottom: 6px solid #03639b;padding-bottom:10px;display: inline-block;width: 100%;">';
$message .= '<td>';
$message .= '<img src="http://nirmalenterprises.co/img/logo.png" style="width:auto;height:80px;float:left">';
$message .= '</td>';
$message .= '<td style="text-align:center;width:100%;">';
$message .= '<h2 style="color: #03639b;">Enquiry Mail</h2>';
$message .= '</td>';
$message .= '</tr>';
$message .= '<tr>';
$message .= '<td>';
$message .= '<p>Dear <b style="color: #e38008;">Nirmal Enterprises</b>,</p>';
$message .= '<p>Mr. <b style="color: #03649b;">';
$message .= $name ;
$message .='</b> has a query stating,';
$message .= '<p><b>';
$message .= $enquiry;
$message .= '</b></p>';
$message .= '<p>He can be reached on number <b style="color: #03649b;">"';
$message .= $phone;
$message .= '"</b> or via email  <b style="color: #03649b;">"';
$message .= $email;
$message .='"</b> </p>.';
$message .= '</p>';
$message .= '</td>';
$message .= '</tr>';
$message .= '</tbody>';
$message .= '</table>';
$message .= '</body>';
$message .= '</html>';

$sendMail = mail($to, $subject, $message, $headers);

        echo $sendMail;
?>