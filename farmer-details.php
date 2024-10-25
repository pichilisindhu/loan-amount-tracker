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
    $farmer_name = $_POST['farmer_name'];
    $father_name = $_POST['father_name'];
    $mother_name = $_POST['mother_name'];
    $house_no = $_POST['house_no'];
    $email=$_POST['email'];
    $village_name = $_POST['village_name'];
    $post = $_POST['post'];
    $mandal = $_POST['mandal'];
    $district = $_POST['district'];
    $state = $_POST['state'];

    // Insert data into the database
    $sql = "INSERT INTO farmers (farmer_name, father_name, mother_name,email, house_no, village_name, post, mandal, district, state)
            VALUES ('$farmer_name', '$father_name', '$mother_name', '$email','$house_no', '$village_name', '$post', '$mandal', '$district', '$state')";

    if ($conn->query($sql) === TRUE) {
        echo "New farmer record created successfully";
        header("location:land-details.html");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the database connection
    $conn->close();
}
?>