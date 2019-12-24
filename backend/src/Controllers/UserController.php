<?php
require_once 'Controller.php';
class UserController extends Controller{

    public function getUser() {
        var_dump($_GET);
    }

}