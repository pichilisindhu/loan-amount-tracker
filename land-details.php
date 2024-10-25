<?php
// Database connection details
$servername = "localhost";
$username = "root"; // Your MySQL username
$password = ""; // Your MySQL password
$dbname = "loan-entry-details"; // The name of your database

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $email=$_POST['email'];
    $cultivation_land = $_POST['cultivation_land'];
    $non_cultivation_land = $_POST['non_cultivation_land'];
    $crop_land = $_POST['crop_land'];

    // Insert data into the database
    $sql = "INSERT INTO land_details (email,cultivation_land, non_cultivation_land, swon_land)
            VALUES ('$email','$cultivation_land', '$non_cultivation_land', '$crop_land')";

    if ($conn->query($sql) === TRUE) {
        echo "New land details record created successfully";
        header("location:crop-loan-details.html");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the database connection
    $conn->close();
}
?>
