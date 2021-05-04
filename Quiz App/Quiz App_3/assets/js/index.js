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
    timeCountDown();
}

/* =========================================
# Time Count Down
==========================================*/

function timeCountDown() {
    const timer_sec = document.querySelector('.timer_sec');
    const time_text = document.querySelector('.time_text');
    let timeLeft = 15;
    timer_sec.innerHTML = timeLeft;
    const time_Counter = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timeLeft = 0);
            time_text.innerHTML = 'Time Off';
        }
        timeLeft = timeLeft < 10 ? '0' + timeLeft : timeLeft;
        timer_sec.innerHTML = timeLeft;
        timeLeft -= 1;
    }, 1000);

    /*============  Linear Counter ============*/
    const linear_counter = document.querySelector('.quiz_box header .linear_counter');
    linear_counter.style.animation = 'slide 15s ease-in-out';
    linear_counter.style.animationDelay = '1.5s';

    /*============  Quiz Options ============*/
    const Quiz_Options = document.querySelectorAll('.option');
    Quiz_Options.forEach(option => {
        option.addEventListener('click', () => {
            linear_counter.style.animationPlayState = 'paused';
            timeLeft = timeLeft < 10 ? '0' + timeLeft : timeLeft;
            timer_sec.innerHTML = timeLeft;
            clearInterval(time_Counter);
            const icons = document.querySelectorAll('.option .icon');
            icons.forEach(icon => {
                const option_span = document.querySelectorAll('.option span');
                option_span.forEach(span => {
                    if (span.innerHTML == "Hyper Text Markup Language") {
                        icon.classList.add('tick');
                        icon.innerHTML = '<i class="fas fa-check"></i>';
                    }
                    else if (span.innerHTML != "Hyper Text Markup Language") {
                        icon.classList.add('cross');
                        icon.innerHTML = '<i class="fas fa-times"></i>';
                    }
                });
            });
        });
    });

}

