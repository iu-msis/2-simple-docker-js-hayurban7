<?php

require 'common.php';

$db = DbConnection::getConnection();

$sql = 'SELECT * FROM Comments';
$vars = [];

if (isset($_GET['userId'])){
    $sql = 'SELECT * FROM Comments WHERE Id = ?';
    $vars = [$_GET['Id']];
}

$stmt = $db-> prepare($sql);
$stmt->execute($vars);

$comments = $stmt->fetchAll();

$json = json_encode($comments, JSON_PRETTY_PRINT);

header('Content-Type: application/json; chasrset=utf-8');
echo $json;