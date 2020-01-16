<?php

include_once __DIR__."/../Repositories/UserRepository.php";

class RegisterController {

    public function createUser(){
        $userRepository = new UserRepository();
        $parameters = $_POST;
        $users = $userRepository->getBasicUserByEmail($parameters['email']);
        if( sizeof($users) ){
            $error = new Response('Podany użytkownik już istnieje', 404);
            die($error->toJSON());
        }
        else{
            $response = new Response( $userRepository->createUser($parameters), 200);
            echo $response->toJSON();
        }
    }
}