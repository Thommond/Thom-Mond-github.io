<?php

$errors = ;

if(isset($_POST['submit']))
{
	//This page should not be accessed directly. Users need to submit the form.

//Getting form submissions
$name = $_POST['name'];
$visitors_email = $_POST['email'];
$message = $_POST['message'];

//Validating
if(empty($name)|| empty($visitors_email)|| empty($message))
{
	$errors .= "\n Error: all fields are required";
	exit;
}

// Checking for injections
if(checkInjected($visitors_email))
{
    $errors .= "Bad email value!";
    exit;
}

// Defining email components
$my_email = 'Thommond@protonmail.com';
$email_from = 'Your proffessional website.';
$email_subject = "Contact form submission: $name";
$email_body = "Here is the message:\n $message".

$to = $my_email;
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitors_email \r\n";

//Send the email!
mail($to,$email_subject,$email_body,$headers);

// Redirecting users to thank you page
// TODO: Make redirect to regular page
header('Location: email-thanks.html');


// Function to check for any email injection attempts
function checkInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}

}
?>
