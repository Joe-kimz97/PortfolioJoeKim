document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');
    var message = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var subject = document.getElementById('subject').value;
        var messageContent = document.getElementById('message').value;

        if (validateEmail(email)) {
            sendMessage(name, email, subject, messageContent);
        } else {
            showMessage('Adresse e-mail invalide');
        }
    });

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
 
    function sendMessage(name, email, subject, messageContent) {
        // Envoyer les données au serveur pour l'envoi du message
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'send_email.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    showMessage(xhr.responseText);
                } else {
                    showMessage('Erreur lors de l\'envoi du message');
                }
            }
        };
        var params = 'name=' + encodeURIComponent(name) +
                     '&email=' + encodeURIComponent(email) +
                     '&subject=' + encodeURIComponent(subject) +
                     '&message=' + encodeURIComponent(messageContent);
        xhr.send(params);
    }

    function showMessage(msg) {
        message.textContent = msg;
    }
});

