<?php
require_once __DIR__.'/../config.php';
require __DIR__ . '/../../vendor/autoload.php';
require_once  __DIR__.'/Controller.php';
require_once  __DIR__.'/../Repositories/UserRepository.php';
use Firebase\JWT\JWT;

class ProtectedController extends Controller {

    protected $userEmail;
    protected $userRepository;

    function __construct( $jwt ){
        $this->userRepository = new UserRepository();

        if($jwt){
            try {
                $decoded = JWT::decode($jwt, KEY, array('HS256'));
                $this->userEmail = $decoded->data->email ;

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