<?php
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "loan-entry-details"; 

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Prepare SQL query to prevent SQL injection
    $stmt = $conn->prepare("SELECT pass FROM user_details WHERE email = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    // Check if the username exists
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();

        // Compare the plain-text password (not secure)
        if ($password == $row['pass']) {
            header("Location: index.html");
            exit(); // Stop further script execution
        } else {
            echo "The Password is wrong.";
        }
    } else {
        echo "The Username is wrong.";
    }

    $stmt->close();
}

$conn->close();
?>
