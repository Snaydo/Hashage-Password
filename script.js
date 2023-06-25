function hashPassword() {
    var password = document.getElementById("password").value;
  
    // Envoi du mot de passe saisi au serveur PHP pour le hachage
    $.ajax({
      type: "POST",
      url: "hash_password.php",
      data: { password: password },
      success: function(response) {
        // Affichage du résultat du hachage dans la zone de texte
        document.getElementById("hashedPassword").value = response;
      }
    });
  }
  