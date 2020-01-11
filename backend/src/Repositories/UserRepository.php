<?php

require_once __DIR__.'/../Models/User.php';
require_once  __DIR__.'/../Utils/BindObject.php';
require_once  __DIR__.'/../Utils/QueryBuilder/QueryBuilder.php';
require_once 'Repository.php';

class UserRepository extends Repository {

    public function getUserById(string $id): array
    {
        try {
            $query = $this->queryBuilder
                ->select()
                ->addColumns(['*'])
                ->addTable('Contact_information')
                ->innerJoin('User', 'id', 'id_user')
                ->where()
                ->equals('User.id', ':id')
                ->end();

            $resultFromDb = $this->getExecutedStatement($query);
            return $this->getObjectFromDatabaseResult($resultFromDb, 'getUserFromQueryResult');
        } catch( ErrorResponse $response){
            die( $response->getMessage() );
        }
    }

    public  function getUserByParameters(array $parameters){
        try {
            $query = $this->queryBuilder
                ->select()
                ->addColumns(['*'])
                ->addTable('Contact_information')
                ->innerJoin('User', 'id', 'id_user')
                ->equals('User.id', $parameters['id'])
                ->equals("User.first_name", $parameters['firstName'])
                ->equals("User.last_name", $parameters['lastName'])
                ->equals("email",$parameters['email'])
                ->end();
            $resultFromDb = $this->getExecutedStatement($query);
            return $this->getObjectFromDatabaseResult($resultFromDb, 'getUserFromQueryResult');

        } catch( ErrorResponse $exception ){
            return $exception;
        }
    }

    public function getUserByEmail(string $email): array
    {
        $qb = new QueryBuilder();
        try {
            $query = $qb
                ->select()
                ->addColumns(['*'])
                ->addTable('Contact_information')
                ->innerJoin('User', 'id', 'id_user')
                ->equals('email', $email)
                ->end();
            $resultFromDb = $this->getExecutedStatement($query);
            return $this->getObjectFromDatabaseResult($resultFromDb, 'getUserFromQueryResult');

        } catch( ErrorResponse $exception ){
            return $exception;
        }
    }

    public function getUserFromQueryResult($user){
       return new User(
            $user['id'],
            $user['first_name'],
            $user['last_name'],
            $user['email'],
            $user['phone_number']
       );
    }
}