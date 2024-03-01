<?php

include '../Model/Employe.php';
include '../Controller/EmployeC.php';

// Création d'un employé
$employe1 = new Employe('Doe', 'ane', '123456789', '12345678910', 'Jane.Doe@gmail.com', '1/1/2000');
$employeC = new EmployeC();
$employeC->show($employe1);
?>