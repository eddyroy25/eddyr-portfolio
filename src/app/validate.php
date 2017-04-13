<?php
// header('Content-type: application/json');


// $name = 'aaaaa';
// $fname = 'aaaaaaa';
// $email = 'aaaa@aaaa.com';
// $tel = '123456789';
// $message = 'aaaaaaaaa';

	// $dest = 'eddyroy2125@gmail.com';
	// $objet        	= "Un message  de ".$fname.$name."";
	// $contenu     	= "Bonjour ! Vous avez reçu un message de ".$fname.$name." envoyé depuis votre application.\r\n Son message : ".$message." E-mail de l'expéditeur: ".$email." Numéro : ".$tel."";
	// $headers 		= "Content-Type: text/plain; charset=\"utf-8\"; DelSp=\"Yes\"; format=flowed /r/n";
	// $headers 		= "From: Eddy Portfolio \r\n";
	// $headers 		.= "Content-Disposition: inline \r\n";
	// $headers 		.= "Content-Transfer-Encoding: 7bit \r\n";
	// $headers 		.= "MIME-Version: 1.0";
	// mail($dest, $objet, utf8_decode($contenu), $headers);

// $response_array['status'] = 'success';
// echo json_encode($response_array);
// header('Location:app.component.html');

$recipient = 'eddyroy2125@gmail.com';
$subject = 'new message\n';
$headers = "From: \n";
$message = '$params->message\n';
mail($recipient, 'mon sujet', 'coucou');