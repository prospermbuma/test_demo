/* ==================================================
# Bookings
===================================================*/
const booking_Row = document.querySelector('.bookings-row');
const booking_Row_totals = document.querySelector('.bookings-row-totals');
const booking_Row_btns = document.querySelector('.bookings-row-btns');
const not_found_booking = document.querySelector('.booking-not-found');

const all_bookings = document.querySelector('.all');
all_bookings.addEventListener('click', function () {
    $(document).ready(function () {
        $('.bookings-row, .bookings-row-totals, .bookings-row-btns').slideDown(800);
    })
    not_found_booking.style.display = 'none';
    all_bookings.classList.add('active');
    upcoming_booking.classList.remove('active');
})

const upcoming_booking = document.querySelector('.upcoming');
upcoming_booking.addEventListener('click', function () {
    booking_Row.style.display = 'none';
    booking_Row_totals.style.display = 'none';
    booking_Row_btns.style.display = 'none';
    $(document).ready(function () {
        $('.booking-not-found').slideDown(800);
    })
    upcoming_booking.classList.add('active');
    all_bookings.classList.remove('active');
})