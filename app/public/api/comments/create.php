<?php

require 'common.php';

$db = DbConnection::getConnection(); 

$stmt = $db->prepare(
    'INSERT INTO comments (commentText)
    VALUES(?)'
);

$stmt->execute([
    $_POST['commentText']
]);

$pk = $db->lastInsertId();

header('HTTP/1.1 303 See Other');
header('Location: ..comments/');
?>
