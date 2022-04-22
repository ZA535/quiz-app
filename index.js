


const quizData = [
    {
        question: "What is your Cast ?",
        a: "Gujjar",
        b: "Jutt",
        c: "Awan",
        d: "Aareien",
        correct: "a",
    },
    {
        question: "What is your Age ?",
        a: "18",
        b: "19",
        c: "20",
        d: "Less than 18",
        correct: "b",
    },
    {
        question: "What is your goal ?",
        a: "Become a Doctor",
        b: "Become a Engineer",
        c: "Bussiness man",
        d: "not deciside",
        correct: "d",
    },
    {
        question: "What is your Country ?",
        a: "Pakistan",
        b: "Indian",
        c: "America",
        d: "China",
        correct: "a",
    },
    {
        question: "Which University You study ?",
        a: "GC",
        b: "UAF",
        c: "UET",
        d: "I am under intermediate",
        correct: "b",
    },

];
const quizsp = document.getElementById('quiz')
const answerels = document.querySelectorAll('.answer')
const questionEls = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselect()
    const currentQuizData = quizData[currentQuiz]

    questionEls.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}
function deselect() {
    answerels.forEach(answerE1 => answerE1.checked = false)
}
function getselect() {
    let answer

    answerels.forEach(answerE1 => {
        if (answerE1.checked) {
            answer = answerE1.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getselect()
    if (answer) {
        if (answer === quizData[currentQuiz].correct)
            score++
    }
    currentQuiz++
    if (currentQuiz < quizData.length) {
        loadQuiz()
    }
    else {
      quizsp.innerHTML=`
      <h2>Your Score is ${score}/${quizData.length} this.</h2>
      <button onclick="location.reload()">Reload</button>
      `
    }

})