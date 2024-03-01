<?php 

include '../Model/employe.php';
include '../Controller/EmployeC.php';

$lastName = $_POST['lName'];
$firstName  = $_POST['fName']; 
$password  = $_POST['pass1'];
$phone  = $_POST['phone'];
$email  = $_POST['email'];
$dOB  = $_POST['dob'];

$employe = new Employe($lastName, $firstName, $password, $phone, $email, $dOB);


var_dump($employe);
echo '<br>';
echo '<hr>';
echo '<br>';

$EmployeC = new EmployeC();
$EmployeC->show($employe);
?>