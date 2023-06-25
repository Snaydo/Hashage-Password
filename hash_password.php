<?php
if (isset($_POST['password'])) {
  $password = $_POST['password'];

  // Génère un hachage sécurisé du mot de passe
  $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

  // Retourne le hachage
  echo $hashedPassword;
}
?>
