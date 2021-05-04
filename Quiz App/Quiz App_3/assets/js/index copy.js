/* =========================================
# Getting Boxes
==========================================*/

const start_Button = document.querySelector('.start_btn');
const info_Box = document.querySelector('.info_box');
const info_Exit = document.querySelector('.leave');
const info_Continue = document.querySelector('.proceed');
const quiz_Box = document.querySelector('.quiz_box');
const result_Box = document.querySelector('.result_box');

start_Button.addEventListener('click', () => {
    /*============  Get the Info Box ============*/
    info_Box.style.opacity = 1;
    info_Box.style.pointerEvents = 'all';
    info_Box.style.transition = 'all 0.3s ease';
    info_Box.style.animation = '0.5s zoom-in';

});

info_Exit.addEventListener('click', function () {
    /*============  Exit the Info Box ============*/
    info_Box.style.opacity = 0;
    info_Box.style.pointerEvents = 'none';
    info_Box.style.animation = '0.1s zoom-out';
});

info_Continue.addEventListener('click', info_Proceed);

function info_Proceed() {
    /*============  Get the Quiz Box ============*/
    quiz_Box.style.opacity = 1;
    quiz_Box.style.pointerEvents = 'all';
    quiz_Box.style.animation = '0.5s zoom-in';

    /*============  Time Count Down ============*/
    const timer_sec = document.querySelector('.timer_sec');
    const time_text = document.querySelector('.time_text');

    // const startingMinutes = 15;
    // let time = startingMinutes * 60;
    // setInterval(updateCountdown, 1000);
    // function updateCountdown() {
    //     // We use Math.floor to get the smallest number without decimals
    //     const minutes = Math.floor(time / 60);
    //     let seconds = time % 60;
    //     seconds = seconds < 10 ? '0' + seconds : seconds;
    //     time_text.innerHTML = `${minutes}: ${seconds}`;
    //     time--;
    // }

    let timeLeft = 15;
  
    setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timeLeft = 0)
            
        }
        timeLeft = timeLeft < 10 ? '0' + timeLeft : timeLeft;
        timer_sec.innerHTML = timeLeft;
        timeLeft -= 1;
        if (timeLeft === 0) {
            time_text.innerHTML = 'Time Off';
        }
    }, 1000)

    // setTimeout(() => {
    //     timer_sec.innerHTML = '15';
    // }, 1000);

    // setTimeout(() => {
    //     timer_sec.innerHTML = '14';
    // }, 2000);

    // setTimeout(() => {
    //     timer_sec.innerHTML = '13';
    // }, 3000);

    // setTimeout(() => {
    //     timer_sec.innerHTML = '12';
    // }, 4000);
    // setTimeout(() => {
    //     timer_sec.innerHTML = '11';
    // }, 5000);
    // setTimeout(() => {
    //     timer_sec.innerHTML = '10';
    // }, 6000);
    // setTimeout(() => {
    //     timer_sec.innerHTML = '09';
    // }, 7000);
    // setTimeout(() => {
    //     timer_sec.innerHTML = '08';
    // }, 8000);
    // setTimeout(() => {
    //     timer_sec.innerHTML = '07';
    // }, 9000);
    // setTimeout(() => {
    //     timer_sec.innerHTML = '06';
    // }, 10000);
    // setTimeout(() => {
    //     timer_sec.innerHTML = '05';
    // }, 11000);
    // setTimeout(() => {
    //     timer_sec.innerHTML = '04';
    // }, 12000);
    // setTimeout(() => {
    //     timer_sec.innerHTML = '03';
    // }, 13000);
    // setTimeout(() => {
    //     timer_sec.innerHTML = '02';
    // }, 14000);
    // setTimeout(() => {
    //     timer_sec.innerHTML = '01';
    // }, 15000);
    // setTimeout(() => {
    //     timer_sec.innerHTML = '00';
    //     time_text.innerHTML = 'Time Off';
    // }, 16000);

    /*============  Linear Counter ============*/
    const linear_counter = document.querySelector('.quiz_box header .linear_counter');
    linear_counter.style.animation = 'slide 16s ease-in';

}
