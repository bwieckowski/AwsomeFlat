<?php
require_once 'Controllers/index.php';
require_once 'Utils/JsonParser.php';
require_once  'Utils/ErrorGenerator.php';

class Routing {

    private $routes = [];

    public function __construct(){
        $this->routes = [
            'filter' => [
                'controller' => 'FilterController',
                'GET' => 'getFilterProperties',
            ],
            'users' => [
                'controller' => 'UserController',
                'POST' => 'getUser',
            ],
            'user' =>[
                'controller' => 'UserController',
                'POST' => 'addNewUser',
                'GET' => 'getUser',
                'UPDATE' => 'updateUser',
            ],
            'register' =>[
                'controller' => 'RegisterController',
                'POST' => 'createUser',
            ],
            'authorize' =>[
                'controller' => 'AuthorizationController',
                'POST' => 'authorizateUser',
            ],
            'facilities' =>[
                'controller' => 'AdvertisementController',
                'GET' => 'getFacilities',
            ],
            'advertisements' =>[
                'controller' => 'AdvertisementController',
                'GET' => 'getAdvertisements',
            ],
            'basicAdvertisements' =>[
                'controller' => 'AdvertisementController',
                'GET' => 'getBasicAdvertisements',
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
            http_response_code(404);
            $error = ErrorGenerator::generateError("zły path", 404);
            echo $parser->writeToJson($error);

        }
    }
}