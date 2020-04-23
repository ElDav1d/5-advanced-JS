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

var Question, questions, question1, question2, question3, currentQuestion

Question = function (question, answers, userAnswer, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    this.userAnswer = userAnswer;
};

Question.prototype.logQuestion = function () {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
        console.log(this.answers[i])
    }
};

Question.prototype.obtainUserAnswer = function () {
    this.userAnswer = parseInt(prompt(this.question));
};

// Question.prototype.checkUserAnswer = function () {

//     this.userAnswer ===
// };

question1 = new Question(
    'Is the World square?',
    [
        '0: Yes',
        '1: No'
    ],
    undefined,
    0
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

questions = [question1, question2, question3];
currentQuestion = Math.floor(Math.random() * questions.length);
questions[currentQuestion].logQuestion();
questions[currentQuestion].obtainUserAnswer();
