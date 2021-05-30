const question = document.querySelector("#question");
const answer = Array.from(document.querySelectorAll(".answer-text"));
const scoreT = document.querySelector("#score");

/* crate variablest to hold questions */
var qArray = [];
var score = 0;
var currentQuestion = {}
var acceptAnswer = true;
var qCount = 0;

var questions = [
    {
        question: "sta je sta",
        answer1: "2",
        answer2: "1222",
        answer3: "212",
        answer4: "21",
        a:1,

    },
    {
        question: "sgde ima da se dobor jede?",
        answer1: "2beorad",
        answer2: "novisad2",
        answer3: "2ne znam",
        answer4: "2arizona",
        a:2,

    },
    {
        question: "sta kko dalje sta",
        answer1: "2asdadasda",
        answer2: "adsads2",
        answer3: "2dasdas",
        answer4: "nema vaeada",
        a:3,

    },
    {
        question: "sko da dassitnadada daslje ",
        answer1: "2pa ova saddan ema vadsadasd",
        answer2: "ovo andeamda dsaassad",
        answer3: "dasdadsasd",
        answer4: "2saasdasdsadas",
        a:1,

    },
]

function showQA () {
    
    question.textContent = questions[0].question
 //   answer.textContent = questions[0].question

}
showQA()
console.log(answer)
console.log (questions[0].question)

