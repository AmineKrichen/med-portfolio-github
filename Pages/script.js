// function evaluateQuizz() {
//     // Initialise le score
//     var score = 0;

//     // Récupère les réponses du formulaire
//     var answers = {
//         q1: document.querySelector('input[name="q1"]:checked').value,
//         q2: document.querySelector('input[name="q2"]:checked').value
//         // Ajoutez d'autres questions au besoin
//     };

//     // Évalue les réponses
//     if (answers.q1 === 'a') {
//         score++;
//     }

//     if (answers.q2 === 'b') {
//         score++;
//     }

//     // Ajoutez d'autres conditions pour les questions supplémentaires au besoin

//     // Affiche les résultats
//     displayResults(score);
// }

// function displayResults(score) {
//     // Affiche la note
//     document.getElementById('score').textContent = score + ' / 2'; // Mettez le nombre total de questions ici

//     // Récupère les réponses correctes
//     var correctAnswers = ['a', 'b']; // Ajoutez les réponses correctes pour chaque question

//     // Affiche les réponses correctes
//     var correctAnswersList = document.getElementById('correctAnswers');
//     correctAnswersList.innerHTML = '';

//     correctAnswers.forEach(function (answer) {
//         var listItem = document.createElement('li');
//         listItem.textContent = answer;
//         correctAnswersList.appendChild(listItem);
//     });

//     // Affiche la section des résultats
//     document.getElementById('results').style.display = 'block';
// }

// function evaluerQCM() {
    
//     var reponsesCorrectes = ["B", "C", "A", "B", "A", "C", "A", "B", "C", "A"];

    
//     var choixUtilisateur = [];
//     for (var i = 1; i <= 10; i++) {
//         var nomOption = "q" + i;
//         var option = document.querySelector('input[name="' + nomOption + '"]:checked');
//         if (option) {
//             choixUtilisateur.push(option.value);
//         }
//     }

    
//     var questionsCorrectes = 0;
//     var questionsIncorrectes = 0;
//     for (var j = 0; j < choixUtilisateur.length; j++) {
//         if (choixUtilisateur[j] === reponsesCorrectes[j]) {
//             questionsCorrectes++;
//         } else {
//             questionsIncorrectes++;
//         }
//     }

    
//     var pourcentageCorrect = (questionsCorrectes / reponsesCorrectes.length) * 100;

   
//     var resultat = "Résultat du QCM sur le sport:\n\n";
//     if (choixUtilisateur.length > 0) {
//         for (var k = 0; k < choixUtilisateur.length; k++) {
//             resultat += "Question " + (k + 1) + ": ";
//             resultat += (choixUtilisateur[k] === reponsesCorrectes[k]) ? "Correcte" : "Incorrecte";
//             resultat += "\n";
//         }
//         resultat += "\nNombre de questions correctes: " + questionsCorrectes + "\n";
//         resultat += "Nombre de questions incorrectes: " + questionsIncorrectes + "\n";
//         resultat += "Pourcentage de réponses correctes: " + pourcentageCorrect.toFixed(2) + "%\n";
//     } else {
//         resultat += "Aucune option sélectionnée. Veuillez répondre aux questions.\n";
//     }

//     alert(resultat);
// }

function evaluerQCM() {
    var reponsesCorrectes = ["B", "C", "A", "B", "A", "C", "A", "B", "C", "A"];
    var choixUtilisateur = [];
    var questionsCorrectes = 0;
    var questionsIncorrectes = 0;
    var resultat = "Résultat du QCM sur le sport:\n\n";

    for (var i = 1; i <= 10; i++) {
        var nomOption = "q" + i;
        var option = document.querySelector('input[name="' + nomOption + '"]:checked');
        if (option) {
            choixUtilisateur.push(option.value);
        }
    }

    for (var i = 0; i < choixUtilisateur.length; i++) {
        resultat += "Question " + (i + 1) + ": ";
        if (choixUtilisateur[i] === reponsesCorrectes[i]) {
            resultat += "Correcte\n";
            questionsCorrectes++;
        } else {
            var reponseCorrecte = "Réponse correcte : " + reponsesCorrectes[i];
            resultat += "Incorrecte. " + reponseCorrecte + "\n";
            questionsIncorrectes++;
        }
    }

    var pourcentageCorrect = (questionsCorrectes / reponsesCorrectes.length) * 100;

    if (choixUtilisateur.length > 0) {
        resultat += "\nNombre de questions correctes: " + questionsCorrectes + "\n";
        resultat += "Nombre de questions incorrectes: " + questionsIncorrectes + "\n";
        resultat += "Pourcentage de réponses correctes: " + pourcentageCorrect.toFixed(2) + "%\n";
    } else {
        resultat += "Aucune option sélectionnée. Veuillez répondre aux questions.\n";
    }

    alert(resultat);
}
