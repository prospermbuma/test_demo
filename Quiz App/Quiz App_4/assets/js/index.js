/* =========================================
# Getting Boxes and some crucial elements
==========================================*/

const start_Button = document.querySelector('.start_btn button');
const info_Box = document.querySelector('.info_box');
const info_Exit = document.querySelector('.leave');
const info_Continue = document.querySelector('.proceed');
const quiz_Box = document.querySelector('.quiz_box');
const result_Box = document.querySelector('.result_box');
const restart_Quiz = result_Box.querySelector('.buttons .restart');
const Quit_Quiz = result_Box.querySelector('.buttons .quit');
const option_list = document.querySelector('.option_list');
const timeCount = quiz_Box.querySelector('.timer .timer_sec');
const timeOff = quiz_Box.querySelector('.timer .time_text');
const timeLine = quiz_Box.querySelector('header .linear_counter');

start_Button.addEventListener('click', () => {
    /*============  Get the Info Box ============*/
    info_Box.classList.add('activeInfo');
});

info_Exit.addEventListener('click', function () {
    /*============  Exit the Info Box ============*/
    info_Box.classList.remove('activeInfo');
});

/*============  Get the Quiz Box ============*/
info_Continue.addEventListener('click', info_Proceed);

function info_Proceed() {
    quiz_Box.classList.add('activeQuiz');
    showQuestions(0);
    startTimer(15);
    startTimerLine(0);
}

/* =========================================
# Getting counters 
==========================================*/

let que_count = 0;
let counter;
let timeValue = 15;
timeCount.textContent = timeValue;
let counterLine;
let widthValue = 0;
let userScore = 0;


/* =========================================
# Getting next button
==========================================*/

const nextBtn = quiz_Box.querySelector('.next_btn');

nextBtn.onclick = () => {
    if (que_count < questions.length - 1) {
        que_count++;
        showQuestions(que_count);
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(counterLine);
        startTimerLine(widthValue);
        nextBtn.style.display = "none";
        timeOff.textContent = "Time Left";
    }
    else {
        clearInterval(counter);
        clearInterval(counterLine);
        console.log("Questions completed");
        showResultBox();
    }
}

/* =========================================
# Getting questions and options from array
==========================================*/

function showQuestions(index) {
    const que_text = document.querySelector('.que_text');
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    let option_tag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[3] + '<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    /*============  Total questions ============*/
    const total_que = quiz_Box.querySelector('.total_que');
    let que_numb = '<span>' + '<p>' + questions[index].numb + '</p>' + 'of' + '<p>' + questions.length + '</p>' + 'Questions' + '</span>';
    total_que.innerHTML = que_numb;
    /*============  Quiz Options ============*/
    const option = option_list.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

/* =========================================
# Icons
==========================================*/

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>'
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>'

/* =========================================
# Selected Option
==========================================*/

function optionSelected(answer) {
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if (userAns == correctAns) {
        userScore += 1;
        console.log(userScore);
        answer.classList.add('correct');
        console.log("Answer is Correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    }
    else {
        answer.classList.add('wrong');
        console.log("Answer is Wrong");
        answer.insertAdjacentHTML("beforeend", crossIcon);

        /*============  If the answer is wrong then automatically select the correct answer  ============*/
        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correctAns) {
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }

    /*============  Once user select an option disabled all other options  ============*/
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add('disabled');
    }
    nextBtn.style.display = "block";
}

/* =========================================
# Show Result Box
==========================================*/

function showResultBox() {
    result_Box.classList.add('activeResult');
    info_Box.classList.remove('activeInfo');
    quiz_Box.classList.remove('activeQuiz');
    const scoreText = result_Box.querySelector('.score_text');
    if (userScore > 3) {
        let scoreTag = '<span>' + 'and congrats! You\'ve got ' + '<p>' + userScore + '</p>' + 'out of' + '<p>' + questions.length + '</p>' + '</span>';
        scoreText.innerHTML = scoreTag;
    }
    else if (userScore > 1) {
        let scoreTag = '<span>' + 'and nice, You\'ve got' + '<p>' + userScore + '</p>' + 'out of' + '<p>' + questions.length + '</p>' + '</span>';
        scoreText.innerHTML = scoreTag;
    }
    else {
        let scoreTag = '<span>' + 'and sorry, You got only' + '<p>' + userScore + '</p>' + 'out of' + '<p>' + questions.length + '</p>' + '</span>';
        scoreText.innerHTML = scoreTag;
    }
}

restart_Quiz.onclick = () => {
    result_Box.classList.remove('activeResult');
    quiz_Box.classList.add('activeQuiz');
    que_count = 0;
    timeValue = 15;
    widthValue = 0;
    userScore = 0;
    showQuestions(que_count);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    nextBtn.style.display = "none";
    timeOff.textContent = "Time Left";
}

Quit_Quiz.onclick = () => {
    window.location.reload();
}

/* =========================================
# Time CountDown
==========================================*/

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time--;
        if (time < 9) {
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if (time < 0) {
            clearInterval(counter);
            timeCount.textContent = "00";
            timeOff.textContent = "Time Off";

            let correctAns = questions[que_count].answer;
            let allOptions = option_list.children.length;

            for (let i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correctAns) {
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
                }
            }
            for (let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add('disabled');
            }
            nextBtn.style.display = "block";
        }
    }
}

function startTimerLine(time) {
    counterLine = setInterval(timer, 29);
    function timer() {
        time += 1;
        timeLine.style.width = time + "px";
        if (time > 549) {
            clearInterval(counterLine);
        }
    }
}