<?php
$numbers = array(10, 20, 30, 40);

echo $numbers[0]."\n";
echo $numbers[1]."\n";
echo $numbers[2];
echo "\nUsing loop:\n";
for ($i = 0; $i < count($numbers); $i++) {
    echo $numbers[$i] ."\n";
}
?>