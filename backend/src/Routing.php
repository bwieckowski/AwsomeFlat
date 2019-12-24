<?php
require_once 'Controllers/index.php';
require_once 'Utlis/JsonParser.php';
require_once  'Utlis/ErrorGenerator.php';

class Routing {

    private $routes = [];

    public function __construct(){
        $this->routes = [
            'user' =>[
                'controller' => 'UserController',
                'POST' => 'addNewUser',
                'GET' => 'getUser',
                'UPDATE' => 'updateUser',
            ],
            'authorize' =>[
                'controller' => 'AuthorizationController',
                'POST' => 'authorizateUser',
            ],
            'advertisment' =>[
                'controller' => 'AdvertismentController',
                'GET' => 'getAdvertisment',
            ],
        ];
    }

    public function run(){
        $fullPath = $_SERVER['REQUEST_URI'];
        $method = $_SERVER['REQUEST_METHOD'];
        $explodedPath =  explode('?', $fullPath);
        $controllerName = explode('/',$explodedPath[0])[1];


        $controller = $this->routes[$controllerName]['controller'];
        $action = $this->routes[$controllerName][$method];

        if($controller != null && $action != null) {
            $object = new $controller;
            $object->$action();
        }else{
            $parser = new JsonParser();
            $error = ErrorGenerator::generateError("zły path", 404);
            echo $parser->writeToJson($error);
        }
    }
}