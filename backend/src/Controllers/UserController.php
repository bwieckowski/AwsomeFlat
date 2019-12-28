<?php
require_once 'Controller.php';
require_once __DIR__.'/../Repositories/UserRepository.php';

class UserController extends Controller{

    public function getUser() {
        $userRepository = new UserRepository();

        if ( !isset($_GET['email']) ){
            return null;
        }

        $email = $_GET['email'];
        $user = $userRepository->getUser($email);
        $this->render($user->toJSON());
    }

}