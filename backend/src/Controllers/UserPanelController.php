<?php

require_once 'ProtectedController.php';

class UserPanelController extends ProtectedController{

    public function __construct(){
        parent::__construct($_POST['jwt']);
    }

    public function getInitialData(){
        echo 'Działa '.$_POST['jwt'];
    }
}