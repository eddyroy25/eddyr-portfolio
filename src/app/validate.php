<?php
switch($_SERVER['REQUEST_METHOD']){
    case("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        $json = file_get_contents('php://input');
        $params = json_decode($json);
		$dest = 'eddyroy2125@gmail.com';
		$subject = "Message d'un visiteur d'Eddy Portfolio\n";
        $name = $params->name;
		$fname = $params->fname;
		$email = $params->email;
		$tel = $params->tel;
		$message = $params->message;
        $content = "Bonjour ! Vous avez reçu un message de ".$fname.$name." envoyé depuis votre application.\r\n Son message : ".$message." E-mail de l'expéditeur: ".$email." Numéro : ".$tel."";

        $headers = "From: ".$fname.$name."\n";
       mail($dest, $subject, $content, $headers);
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}