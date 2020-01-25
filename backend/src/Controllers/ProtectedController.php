<?php
require_once __DIR__.'/../config.php';
require __DIR__ . '/../../vendor/autoload.php';
require_once  __DIR__.'/Controller.php';
require_once  __DIR__.'/../Repositories/UserRepository.php';
use Firebase\JWT\JWT;

class ProtectedController extends Controller {

    protected $user;
    protected $userRepository;

    protected function authenticate( $jwt ){
        $this->userRepository = new UserRepository();

        if(isset($jwt) && $jwt){
            try {
                $decoded = JWT::decode($jwt, KEY, array('HS256'));
                $userEmail = $decoded->data->email;
                $this->user = $this->userRepository->getBasicUserByEmail($userEmail);
                if(sizeof($this->user) !== 1)
                    $this->accessDenited();

                $this->user = $this->user[0];
            } catch(Exception $e){
                $this->accessDenited();
            }

        } else {
            $this->accessDenited();
        }
    }

    private function accessDenited(){
        http_response_code(401);

        die( json_encode(array(
            "message" => "Access denied."
        )));
    }
}