<?php

class EmployeC {
    public function show($employe) {
        echo'<table border=1 width="100%">
        <tr align="center">
        <td>Last Name</td>
        <td>First Name</td>
        <td>Password</td>
        <td>Phone</td>
        <td>Email</td>
        <td>Date of Birth</td>
        </tr>
        <tr> 
        <td>'. $employe->getLastName() .'</td>
        <td>'. $employe->getFirstName() .'</td>
        <td>'. $employe->getPassword() .'</td>
        <td>'. $employe->getPhone() .'</td>
        <td>'. $employe->getEmail() .'</td>
        <td>'. $employe->getDOB() .'</td>
        </tr>
      </table>';
    }
}
?>