<?php
// envoyer.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Adresse email où vous souhaitez recevoir les messages
    $destinataire = "sergende695@gmail.com";
    
    // Sujet du mail
    $sujet = "Nouveau message de contact de " . $nom;
    
    // Corps du message
    $contenu = "Nom: " . $nom . "\n";
    $contenu .= "Email: " . $email . "\n\n";
    $contenu .= "Message:\n" . $message;
    
    // En-têtes de l'email
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    
    // Envoi de l'email
    if(mail($destinataire, $sujet, $contenu, $headers)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Une erreur est survenue lors de l'envoi du message.";
    }
}
?>