
    <?php
    // Database connection details
    $servername = "localhost"; // Use your MySQL server details
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
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];
        $sql="INSERT INTO user_queries (name,email,message) values('$name','$email','$message')";
        if($conn->query($sql)===true){
            echo "New Record Inserted Sucessfully.";
            header("Location:index.html");
         }
         else{
            echo $conn->error;
         }
     
     }
     
     // Close the connection
     $conn->close();
     ?>
    