<?php
// Database configuration
$servername = "localhost";
$username = "root"; // your DB username
$password = ""; // your DB password
$dbname = "loan-entry-details";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $email = $_POST['email'];
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $sql="INSERT INTO user_details (email,first_name,last_name) values('$email','$first_name','$last_name')";
    if($conn->query($sql)===true){
       echo "New Record Inserted Sucessfully.";
       header("Location: password.html");
    }
    else{
       echo $conn->error;
    }

}

// Close the connection
$conn->close();
?>

