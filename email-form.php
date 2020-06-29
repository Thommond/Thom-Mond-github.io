<?php
$name = $_POST['name'];
$email = $_POST['email'];
$from = 'From: *.Thommondeaux.com';
$to = 'Thommond@protonmai.com';
$subject = 'Email from Proffestional Website';
$body = "From $name\n E-Mail: $email\n Message:\n $message";


if ($_POST['submit']) {
	if ( mail($to, $subject, $body, $from) ) {
		$successMessage = "Message successfully sent";

	}
		else {
			$successMessage = "Message Failed to send, Try again.";
		}


}
?>
