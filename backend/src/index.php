<?php
require_once 'Routing.php';
header('Content-Type: application/json');
$router = new Routing();
$router->run();