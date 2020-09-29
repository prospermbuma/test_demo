// OnFocus Event
function foCus() {
    document.getElementById('username').style.border = ' 2px solid #1e90ff';
}

// OnFocus Event
function foCus_1() {
    document.getElementById('password').style.border = ' 2px solid #1e90ff';
}

// Get Full Year
let date = new (Date);
let year = date.getFullYear();
document.getElementById('year').innerHTML = year;