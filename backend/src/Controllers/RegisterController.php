<?php

include_once __DIR__."/../Repositories/UserRepository.php";

class RegisterController {

    public function createUser(){
        $userRepository = new UserRepository();
        $parameters = json_decode(file_get_contents('php://input'),true);
        $users = $userRepository->getBasicUserByEmail($parameters['email']);
        if( sizeof($users) ){
            $error = new Response('Podany użytkownik już istnieje', 404);
            die($error->toJSON());
        }
        else{
            $response = $userRepository->createUser($parameters);
            echo $response->toJSON();
        }
    }
}