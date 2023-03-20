
let correctAnswers = 0;
let question = [
    "Ruim hoeveel procent van de Nederlanders hebben autisme?",
    "Kan door een bloedtest vastgesteld worden of iemand autisme heeft?",
    "Wat voor klachten krijgen mensen met autisme?",
    "Hoeveel procent van de bevolking heeft angst- en/of dwangstoornis, posttraumatische stress-stoornis (ptss), burn-out of een persoonlijkheidsstoornis?",
    "De meeste mensen met autisme hebben een normale tot hoge intelligentie Klop dit?",
    "Kan iemand met autisme vast lopen van basis- naar voortgezet onderwijs of van onderwijs naar stage/ werk?",
    "Is het al bekend wat autisme precies is?",
    "Met wat kan autisme objectief vastgesteld worden?",
    "Klopt het dat autisme op veel verschillende manieren tot uiting kan komen?",
    "Komen ADHD en epilepsie vaak voor bij iemand met autisme? "
];

let answers = [
    ["1%", "3%", "5%", "9%"],
    ["Ja", "Nee"],
    ["Problemen met lezen", "Sociaal actief", "Stemmingsstoornis & depressie", "Angst"],
    ["30%", "40%", "10%", "60%"],
    ["Ja", "Nee"],
    ["Ja", "Nee"],
    ["Ja", "Nee"],
    ["Fysieke kenmerken", "Houdingskenmerken", "Gedragskenmerken"],
    ["Ja", "Nee"],
    ["Ja", "Nee"]
];

let correctAnswer = [
    "1%",
    "Nee",
    "Stemmingsstoornis & depressie",
    "40%",
    "Nee",
    "Ja",
    "Nee",
    "Gedragskenmerken",
    "Ja",
    "Ja"
];

let randomQuestion = Math.floor(Math.random() * question.length);

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
document.getElementById("question-form").innerHTML += `<button type="submit" id="submit" class="submit">Volgende vraag</button>`;


function checkAnswer() {

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

progress.value = answerr;

addEventListener("submit", function(event) {

    event.preventDefault();
    question.splice(randomQuestion, 1);
    answers.splice(randomQuestion, 1);
    correctAnswer.splice(randomQuestion, 1);
    randomQuestion = Math.floor(Math.random() * question.length);

    if (answers[randomQuestion] == undefined) {
        document.getElementById("question").innerHTML = `Je hebt ${correctAnswers} van de 10 vragen goed`;
        document.getElementById("question-form").innerHTML = "";
        return;
    }

    if (question.length == 0) {
        document.getElementById("question").innerHTML = `Je hebt ${correctAnswers} van de 10 vragen goed`;
        document.getElementById("question-form").innerHTML = "";
        return;
    }

    checkAnswer();

    answerr += 1;
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
    document.getElementById("question-form").innerHTML += `<button type="submit" id="submit" class="submit">Volgende vraag</button>`;

    let progress = document.querySelector(".progression");
    progress.value = answerr;

});