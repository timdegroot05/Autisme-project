
let correctAnswers = 0;
let question = [
    // ask questions to see if i have autism or not
    "What is the average age of a child with autism?",
    "What should you do when you see a pedestrian crossing the road?",



];

let answers = [
    // answers to the questions
    ["1", "2", "3", "4"],
];

let correctAnswer = [
    "1",
    "2",

];

let randomQuestion = Math.floor(Math.random() * question.length);

// show the question
document.getElementById("question").innerHTML = question[randomQuestion];

let answer = "";
for (let i = 0; i < answers[randomQuestion].length; i++) {
    console.log(answers[randomQuestion][i]);
    answer += `
  <div>
  <input type="radio" name="question" id="answer${i}" value="${i}">
  <label class="answer${i}">${answers[randomQuestion][i]}</label>
  </div>
  `;
}
document.getElementById("question-form").innerHTML = answer;
document.getElementById("question-form").innerHTML += `<button type="submit" id="submit" class="submit">Next question</button>`;

// check the answer

function checkAnswer() {
    // check if the answer is correct
    let userAnswer = document.querySelector('input[name="question"]:checked').value;
    console.log(userAnswer);

    if (userAnswer == correctAnswer[randomQuestion]) {
        correctAnswers++;
        let progress = document.querySelector(".progression");
        progress.value = correctAnswers;
    }
    console.log(correctAnswers);
}
let answerr = 0;
let progress = document.querySelector(".progression");
// show total number of questions answered even if the answer is wrong
progress.value = answerr;

addEventListener("submit", function(event) {

    event.preventDefault();
    // check if all questions have been answered
    question.splice(randomQuestion, 1);
    answers.splice(randomQuestion, 1);
    correctAnswer.splice(randomQuestion, 1);
    randomQuestion = Math.floor(Math.random() * question.length);
    // or if question is undefined
    if (answers[randomQuestion] == undefined) {
        document.getElementById("question").innerHTML = `You have answered ${correctAnswers} out of 10 questions correctly`;
        document.getElementById("question-form").innerHTML = "";
        return;
    }

    if (question.length == 0) {
        document.getElementById("question").innerHTML = `You have answered ${correctAnswers} out of 10 questions correctly`;
        document.getElementById("question-form").innerHTML = "";
        return;
    }

    checkAnswer();
    // make sure the previous questions are not repeated

    answerr += 1;
    // show the question
    document.getElementById("question").innerHTML = question[randomQuestion];

    let answer = "";
    for (let i = 0; i < answers[randomQuestion].length; i++) {
        console.log(answers[randomQuestion][i]);
        answer += `
    <div>
    <input type="radio" name="question" id="answer${i}" value="${i}">
    <label class="answer${i}">${answers[randomQuestion][i]}</label>
    </div>
    `;
    }
    document.getElementById("question-form").innerHTML = answer;
    document.getElementById("question-form").innerHTML += `<button type="submit" id="submit" class="submit">Next question</button>`;

    // add 1 to the progress bar
    let progress = document.querySelector(".progression");
    progress.value = answerr;

});