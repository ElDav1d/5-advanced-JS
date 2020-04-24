/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function () {
    var Question, questions, question1, question2, question3, currentQuestion, playing, score

    Question = function (question, answers, userAnswer, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.userAnswer = userAnswer;
        this.correctAnswer = correctAnswer;
    };

    Question.prototype.logQuestion = function () {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(this.answers[i]);
        }
    };

    Question.prototype.obtainUserAnswer = function () {
        this.userAnswer = prompt(this.question);
        if (this.userAnswer === 'exit' || this.userAnswer === 'EXIT') {
            return
        }
        this.userAnswer = parseInt(this.userAnswer);
    };

    Question.prototype.checkUserAnswer = function () {
        if (this.userAnswer === this.correctAnswer) {
            console.log('YES, IS CORRECT YOU SMARTY PANTS!');
            score += 1;
        } else if (this.userAnswer > this.answers.length || this.userAnswer < 0) {
            console.log('THERE AREN\'T ' + this.userAnswer + ' ANSWERS.');
        } else if (this.userAnswer === 'exit' || this.userAnswer === 'EXIT') {
            playing = false;
            console.log('YOU ARE EXITING THE QUIZ. Refresh your browser to start again.');
        } else if (Number.isNaN(this.userAnswer)) {
            console.log('PLEASE PUT A NUMBER');
        } else {
            console.log('NO WAY, YOU SCIENTOLOGIST');
        }
        console.log('SCORE: ' + score + ' POINTS')
    };

    question1 = new Question(
        'Is the World square?',
        [
            '0: Yes',
            '1: No'
        ],
        undefined,
        1
    );

    question2 = new Question(
        'Which are the water\'s estates?',
        [
            '0: Liquid and Solid',
            '1: Solid and Gas',
            '2: Liquid, Solid and Gas'
        ],
        undefined,
        2
    );

    question3 = new Question(
        'What is the direction of Time',
        [
            '0: Back',
            '1: Forward',
            '2: Both'
        ]
        ,
        undefined,
        1
    );

    score = 0;
    play();

    function play() {
        if (playing === false) { return }

        questions = [question1, question2, question3];
        playing = true;
        currentQuestion = Math.floor(Math.random() * questions.length);

        console.log('Please use a NUMBER for your answer. If you want to QUIT THE GAME enter \'exit\' or \'EXIT\'');
        questions[currentQuestion].logQuestion();
        questions[currentQuestion].obtainUserAnswer();
        questions[currentQuestion].checkUserAnswer();
        play();
    }
})();
