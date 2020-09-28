// OnFocus Event
function myFocus() {
    document.getElementById('username').style.border = ' 2px solid #1e90ff';
}

// OnBlur Event
function myBlur() {
    document.getElementById('password').style.border = ' 2px solid #1e90ff';
}

// Get Full Year
let date = new (Date);
let year = date.getFullYear();
document.getElementById('year').innerHTML = year;