document.addEventListener('DOMContentLoaded', function ()
{
    console.log('DOM loaded successfully');
    const quiz = document.getElementById('quiz-container');
    const feedback = document.getElementById('feedback');

    quiz.addEventListener('submit', function(event)
    {
        event.preventDefault();

        
    });

    const quizSubmit =  document.getElementById('submit-answer');
    quizSubmit.addEventListener('click', checkAnswer);

    function checkAnswer()
    {
        const correctAnswer = "4";
        const selected = document.querySelector('input[name="quiz"]:checked');
        if (!selected)
        {
            alert("Please, select an answer");
            return;
        }
        const userAnswer = selected.value;

        // compare user answer to correct answer
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        }
        else
        {
            feedback.textContent = "That's incorrect. Try again!";
        }
    }
})


