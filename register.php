<?php
   session_start();
   // Izmeniti sifru umesto 'wanderlust' u odnosu na sifru koja se koristi
   $db = mysqli_connect("localhost", "root", "password", "authentication");
   
   if(isset($_POST['register_btn'])) {
   	session_start();
   	$username = mysqli_real_escape_string($db, $_POST['username']);
   	$email = mysqli_real_escape_string($db, $_POST['email']);
   	$password = mysqli_real_escape_string($db, $_POST['password']);
   	$password2 = mysqli_real_escape_string($db, $_POST['password2']);
   	$first_name = mysqli_real_escape_string($db, $_POST['first_name']);
   	$last_name = mysqli_real_escape_string($db, $_POST['last_name']);


   	if(strlen($username) == 0){
		header("location: register.php?error=1");
		goto end;
   	}

   	if(strlen($email) == 0){
		header("location: register.php?error=2");
		goto end;
   	}

   	if(strlen($password) < 8){
		header("location: register.php?error=3");
		goto end;
   	}

	if(strlen($first_name) == 0){
		header("location: register.php?error=5");
		goto end;
	}

	if(strlen($last_name) == 0){
		header("location: register.php?error=6");
		goto end;
	}

   	if ($password === $password2) {
   		$password = password_hash($password, PASSWORD_DEFAULT);
   		$sql = "INSERT INTO accounts(username, email, password, first_name, last_name) VALUES('$username', '$email', '$password', '$first_name', '$last_name')";
   		$result = mysqli_query($db, $sql) or die("BAD SQL QUERY: $sql");
   		//$_SESSION['message'] = "Registration done.";
   		// $_SESSION['username'] = $username;
   		// header("location: index.php"):
   	} else {
		header("location: register.php?error=4");
		goto end;
   	}
   }
   end:
?>

<!DOCTYPE html>
<html lang="sr">
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Регистрација | Гимназија "Светозар Марковић", Ниш</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="css/style.css" />
	<script src="js/hubscript.js"></script>
	<style>
		@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300');
	</style>
</head>
<body>
	<?php include 'header.php'; ?>
	<form method="post" action="register.php">
            <table>
             <tr>
                 <td>Корисничко име:</td>
                 <td><input type="text" name="username" class="textInput">
				 <?php if(isset($_GET['error']) && $_GET['error'] == 1) echo 'Username can\'t be blank'; ?></td>
             </tr>
	     <tr>
                 <td>Адреса електронске поште:</td>
                 <td><input type="email" name="email" class="textInput">
				 <?php if(isset($_GET['error']) && $_GET['error'] == 2) echo 'Email can\'t be blank'; ?></td>
             </tr>
             <tr>
                 <td>Шифра коју желите користити:</td>
                 <td><input type="password" name="password" class="textInput">
				 <?php if(isset($_GET['error']) && $_GET['error'] == 3) echo 'Password must be at least 8 characters long'; ?></td>
             </tr>
             <tr>
                 <td>Поновите шифру:</td>
                 <td><input type="password" name="password2" class="textInput">
				 <?php if(isset($_GET['error']) && $_GET['error'] == 4) echo 'Passwords don\'t match can\'t be blank'; ?></td>
             </tr>
             <tr>
                 <td>Ваше име:</td>
                 <td><input type="text" name="first_name" class="textInput">
				 <?php if(isset($_GET['error']) && $_GET['error'] == 5) echo 'Name can\'t be blank'; ?></td>
             </tr>
             <tr>
                 <td>Ваше презиме:</td>
                 <td><input type="text" name="last_name" class="textInput">
				 <?php if(isset($_GET['error']) && $_GET['error'] == 6) echo 'Name can\'t be blank'; ?></td>
             </tr>
			 	<td></td> <td><input type="submit" name="register_btn" value="Региструј се" class="dropbtn2"></td>
            </table>
        </form>
</body>
</html>
<!-- W -->
