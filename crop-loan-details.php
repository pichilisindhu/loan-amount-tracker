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
    $loan_amount = $_POST['loan_amount'];
    $email = $_POST['email'];
    $interest_rate = $_POST['interest_rate'];
    $compensation = $_POST['compensation'];
    $remaining_amount = $_POST['remaining_amount'];
    $due_amount = $_POST['due_amount'];
    $amount_paid = $_POST['amount_paid'];

    // Insert data into the database
    $sql = "INSERT INTO loan_details (email,loan_amount, interest_rate, compensation, remaining_amount, due_amount, amount_paid)
            VALUES ('$email','$loan_amount', '$interest_rate', '$compensation', '$remaining_amount', '$due_amount', '$amount_paid')";

    if ($conn->query($sql) === TRUE) {
        echo "New loan record created successfully";
        header("Location:index.html");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the database connection
    $conn->close();
}
?>
