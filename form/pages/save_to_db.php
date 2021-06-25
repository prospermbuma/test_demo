<?php
/* ====================================================
# Form submission
=====================================================*/

// Require connection
require_once('../assets/required/connection.php');

// Get form input values and purify them
$first_name = mysqli_real_escape_string($conn, trim(strtoupper($_POST['fname'])));
$last_name = mysqli_real_escape_string($conn, trim(strtoupper($_POST['lname'])));
$email = mysqli_real_escape_string($conn, trim($_POST['email']));
$phone = mysqli_real_escape_string($conn, trim($_POST['phone']));
$address = mysqli_real_escape_string($conn, trim(strtoupper($_POST['address'])));
$birthdate = mysqli_real_escape_string($conn, trim($_POST['birthdate']));
$gender = mysqli_real_escape_string($conn, trim(strtoupper($_POST['sex'])));
$comments = mysqli_real_escape_string($conn, trim($_POST['comments']));

// Check if form submission method is available
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Check if the email is not taken
    $sql = "SELECT id FROM student WHERE email = '$email' AND phone = '$phone'";
    $select_result = mysqli_query($conn, $sql);
    // If the email not taken then register save information
    if (mysqli_num_rows($select_result) === 0) {
        $q = "INSERT INTO student(firstname, lastname, email, phone, address, birthdate, gender, comments, saved_date) VALUES('$first_name', '$last_name', '$email', '$phone', '$address','$birthdate', '$gender', '$comments', NOW())";
        $insert_result = mysqli_query($conn, $q);
        if ($insert_result) {
            echo "Information saved successfully";
        } else {
            die("Not saved " . mysqli_error($conn));
        }
    } else {
        echo "Email already taken";
    }
    // Free result
    mysqli_free_result($select_result);
}
// Close connection
mysqli_close($conn);
