<?php
require_once __DIR__ .'/../ProtectedController.php';
require_once __DIR__ . '/../../Repositories/UserRepository.php';

class UserController extends ProtectedController {

    public function __construct(){
        parent::__construct($_POST['jwt']);
    }

    public function getUser() {
        $userRepository = new UserRepository();

        $users = $userRepository->getUserByParameters($_GET);
        $result = [];
        if($users != null) {
            foreach ($users as $user) {
                $result[] = $user->toArray();
            }
            echo json_encode($result, JSON_UNESCAPED_UNICODE);
        }
        else
            $this->render('[]');
    }

}