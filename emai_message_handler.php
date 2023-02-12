<?php
	$name =$_POST['visitor'];
	$visitor_email =$_POST['vis_email'];
	$visitor_call_num = $_POST['vis_num'];
	$message = $_POST['user_message'];


	$email_sender = 'felipe_holder@live.com';
	$email_subject = "Form Submission From Website";

	$email_body = "Visitor's name: $name \n"
			"Visitor's email address: $visitor_email \n"
			"Visitor's contact number: $visitor_call_num \n"
				"Visitor's message: $message \n";

	$to = $philippie.holder@gmail.com";

	$headers = "From: $email_sender \r\n";

	$headers .= "Reply-to: $visitor_email \r\n";

	mail($to, $email_subject, $email_body, $headers);

	header("Location: terryIndex.html");
?>