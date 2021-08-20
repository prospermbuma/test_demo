/* ==================================================
# Form Submission
===================================================*/
const form = document.querySelector('form'),
    statusTxt = form.querySelector('.submit-button-area span');

form.onsubmit = (e) => {
    e.preventDefault(); //Prevent from submitting
    statusTxt.style.display = 'block';

    // Creating new xml object
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'message.php', true); // Sending post request to a message.php file
    xhr.onload = () => { // once ajax loaded
        console.log('Ready State: ', xhr.readyState);
        console.log('Status: ', xhr.status);
        if (xhr.status === 200 && xhr.readyState === 4) { // if ajax response status is 200 and ready status is 4 means there is no any error
            let response = xhr.response; // Storing ajax response in a variable response
            if (response.indexOf("Fields can not be blank") != -1 || response.indexOf("Enter a valid email address") != -1 || response.indexOf("No data redundancy is required") != -1) {
                statusTxt.innerText = response;
                console.log(response);
                statusTxt.style.color = 'red';
                statusTxt.style.display = 'block';
            }
            else if (response.indexOf("Your message has been sent succesfully") != -1) {
                statusTxt.style.display = 'block';
                statusTxt.style.color = 'green';
                statusTxt.innerText = response;
                form.reset();
                setTimeout(() => {
                    statusTxt.style.display = 'none';
                }, 3000) // Hide the text after 3 seconds if the message is sent
            }
        }
    }
    let formData = new FormData(form); //Creating a new FormData object. This object is used to send form data
    xhr.send(formData); //Sending form data
}