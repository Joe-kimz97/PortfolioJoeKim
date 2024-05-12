<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST'){
    //Recuperer les données du formulaire
    $name =$_POST['name'];
    $name =$_POST['email'];
    $name =$_POST['subject'];
    $name =$_POST['message'];

    //construction du message 
    $email_message ="Nom : $name\n";
    $email_message ="Adresse e-mail : $email\n";
    $email_message ="Sujet : $subject\n";
    $email_message ="Message : \n$message\n";

    //destinataire de l'email
    $to = 'joekimz97@gmail.com'

    //entete de l'adresse mail
    $headers = "From : $email";

    //envoyer l'email
    if(mail($to, $subject, $email_message, $headers)){
        echo 'votre message a été envoyé avec succès'
    } else{
        echo 'Une erreur est survenue lors de l\'envoi de votre message';
    } else{
        http_response_code(405);
        echo 'Methode non autorisé';
    }
}