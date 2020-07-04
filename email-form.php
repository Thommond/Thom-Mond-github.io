<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Users need to submit the form.
	echo "error; you need to submit the form!";
}

//Getting form submissions
$name = $_POST['name'];
$visitors_email = $_POST['email'];
$message = $_POST['message'];

// Validate forms first
if(empty($name)||empty($visitors_email))
{
    echo "Name and email are mandatory!";
    exit;
}

// Checking for injections
if(checkInjected($visitors_email))
{
    echo "Bad email value!";
    exit;
}

// Defining email components
$email_from = $visitors_email;
$email_subject = "Email from your website.";
$email_body = "You have received a new message from the user $name.\n".
    "Here is the message:\n $message".

$to = "Thommond@protonmail.com";
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
?>
