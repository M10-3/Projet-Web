<?php
class Employe{
    private $lastname;
    private $firstname;
    private $password;
    private $phone;
    private $email;
    private $dOB;
public function __construct($ln=null, $fn=null, $pass=null, $phone=null, $em = null, $dOB = null)
{
$this->lastName= $ln;
$this->firstName= $fn;
$this->password= $pass;
$this->phone= $phone;
$this->email= $em;
$this->dOB= $dOB;
}
public function getLastName()
{
return $this->lastName;
}
public function setLastName($lastName)
{
$this->lastName = $lastName;
return $this;
}
public function getFirstName()
{
return $this->firstName;
}
public function setFirstName($firstName)
{
$this->firstName = $firstName;
return $this;
}
public function getPassword()
{
return $this->password;
}
public function setPassword($password)
{
$this->password = $password;
return $this;
}
public function getPhone()
{
return $this->phone;
}
public function setPhone($phone)
{
$this->phone = $phone;
return $this;
}
public function getEmail()
{
return $this->email;
}
public function setEmail($email)
{
$this->email = $email;
return $this;
}
public function getDOB()
{
return $this->dOB;
}
public function setDOB($dOB)
{
$this->dOB = $dOB;
return $this;
}
}
$employ1= new Employe("doe", "jane", "123456789", "(insérer le numéro de téléphone)", "jane.doe@gmail.com", "1/1/2000");

?>