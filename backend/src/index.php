<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

require_once 'Routing.php';
$router = new Routing();
$router->run();