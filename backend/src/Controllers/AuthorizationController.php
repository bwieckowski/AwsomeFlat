<?php
require_once __DIR__.'/../config.php';
require __DIR__ . '/../../vendor/autoload.php';
use Firebase\JWT\JWT;



class AuthorizationController {
    private function userCanLoggin( $userData, $userArray ){

        if( !sizeof($userArray) ) {
            $error = new Response('Złe dane do logowania - brak usera w bazie', 404);
            die($error->toJSON());
        }

        $user = $userArray[0];

        if( $user->getPassword() !== $userData['password'] ) {
            $error = new Response('Złe dane do logowania - zły email', 404);
            die($error->toJSON());
        }

        return $user;
    }

    private function generateJWT( $user ){
        $token = array(
            "iss" => ISS,
            "aud" => AUD,
            "iat" => IAT,
            "nbf" => NFB,
            "data" => array(
                "id" => $user->getId(),
                "firstName" => $user->getFirstName(),
                "email" => $user->getEmail()
            )
        );

        // generate jwt
        return JWT::encode($token, KEY);
    }

    function authorizateUser(){
        $userData = $_POST;
        $userRepository = new UserRepository();
        $userArray = $userRepository->getBasicUserByEmail($userData['email']);

        $user = $this->userCanLoggin( $userData, $userArray );

        $jwt = $this->generateJWT($user);
        echo json_encode(
            array(
                "message" => "Successful login.",
                "jwt" => $jwt
            )
        );

    }
}