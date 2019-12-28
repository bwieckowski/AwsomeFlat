<?php
require_once __DIR__ .'/../Controller.php';
require_once __DIR__ . '/../../Repositories/UserRepository.php';

class UserController extends Controller{

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
            $this->render('{}');
    }

}