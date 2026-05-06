<?php

class Student {

    public $name;
    public $rollNo;

    function display() {
        echo "Name: " . $this->name . "<br>";
        echo "Roll No: " . $this->rollNo . "<br>";
    }
}


$s1 = new Student();

$s1->name = "Swaroop";
$s1->rollNo = 101;


$s1->display();
?>