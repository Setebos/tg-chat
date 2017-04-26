<?php

$name = $_POST['name'];
$message = $_POST['message'];
$line = $name.' > '.$message.'<br>';

$file = file('log.html');
array_push($file, $line);
file_put_contents('log.html', $file);

?>
