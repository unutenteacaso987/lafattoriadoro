document.getElementById('submitQuiz').addEventListener('click', function() {
    let score = 0;
    const answers = document.getElementsByName('q1');

    for (let i = 0; i < answers.length; i++) {
        if (answers[i].checked && answers[i].value === 'C') {
            score += 20;
        }
    }

    document.getElementById('quizResult').innerText = Hai totalizzato ${score} punti!;
});