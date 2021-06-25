<?php
/* ====================================================
# Database connection
=====================================================*/

// Require constants
require_once('constants.php');

// Make a connection

$conn = mysqli_connect(SERVER, USER, PASSCODE, DB);

if ($conn) {
    echo "Connected to " . DB . "successfully";
}

die("Failed to connect to " . DB . mysqli_connect_errno());
