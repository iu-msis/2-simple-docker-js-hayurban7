<?php

require 'common.php';

$db = DbConnection::getConnection();

$sql = 'SELECT * FROM comments';
$vars = [];

if (isset($_GET['userId'])){
    $sql = 'SELECT * FROM comments WHERE userId = ?';
    $vars = [$_GET['userId']];
}

$stmt = $db-> prepare($sql);
$stmt->execute($vars);

$comments = $stmt->fetchAll();

$json = json_encode($comments, JSON_PRETTY_PRINT);

header('Content-Type: application/json; chasrset=utf-8');
echo $json;