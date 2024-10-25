<?php
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "loan-entry-details"; 

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $email = $_POST['email'];  // Fixed: Added semicolon
    $password = $_POST['confirm-password'];

    

    // Prepare the SQL statement
    $stmt = $conn->prepare("UPDATE user_details SET pass='$password' WHERE email='$email' ");


    // Execute the statement
    if ($stmt->execute() === TRUE) {
        header("Location: login-form.html");
        exit; // Always call exit after a redirect
    } else {
        echo "Error: " . $stmt->error; // Output error for debugging
    }

    // Close the statement
    $stmt->close();
}

// Close the connection
$conn->close();
?>
