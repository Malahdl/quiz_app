const quizData = [
    {
        question: "كم عدد حروف الهجاء الإنجليزية؟",
        a: "22",
        b: "25",
        c: "26",
        d: "30",
        correct: "c",
    },
    {
        question: "من هو ملك المملكة العربية السعودية؟",
        a: "محمد بن سلمان",
        b: "سلمان بن عبد العزيز",
        c: "جورج بوش",
        d: "محمد بن نايف",
        correct: "b",
    },
    {
        question: "ما هو ناتج ضرب 30 في 20؟",
        a: "600",
        b: "1500",
        c: "1200",
        d: "500",
        correct: "a",
    },
    {
        question: "أي من الآتي ليس من الفواكه؟",
        a: "التفاح",
        b: "الجزر",
        c: "الطماطم",
        d: "البرتقال",
        correct: "b",
    },
];

const quizContainer = document.getElementById("quiz");
const questionNumber = document.getElementById("question-num");
const question = document.getElementById("question");
const answers = document.getElementsByName("answer");
const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");
const a4 = document.getElementById("a4");
const errorMessage = document.getElementById("error-message");
const btn = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionNumber.innerText = "السؤال رقم " + (currentQuiz + 1);

    question.innerText = currentQuizData.question;

    a1.innerText = currentQuizData.a;
    a2.innerText = currentQuizData.b;
    a3.innerText = currentQuizData.c;
    a4.innerText = currentQuizData.d;
}

function getSelectedValue() {
    let answer = undefined;

    for (let i = 0; i < answers.length; i++) {
        if(answers[i].checked) {
            answer = answers[i].id;
        }
    }

    return answer;
}

function deselectAnswers() {
    errorMessage.innerText = "";
    for (let i = 0; i < answers.length; i++) {
        answers[i].checked = false;
    }
}

btn.addEventListener("click", () => {
    let answer = getSelectedValue();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if(currentQuiz == quizData.length - 1) {
            btn.innerText = "إرسال"
        }

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quizContainer.innerHTML = `
            <h3>لقد أنهيت الاختبار !</h3> 
            <h3>نتيجتك هي ${score}/${quizData.length}</h3>
            <button onclick="location.reload()">إعادة الاختبار</button>
            `
        }
    } else {
        errorMessage.innerText = "يجب اختيار إجابة"
    }
})