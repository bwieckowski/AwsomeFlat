<?php

require_once __DIR__.'/../Models/User.php';
require_once  __DIR__.'/../Utils/BindObject.php';
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
        } catch( Response $response){
            die( $response->getMessage() );
        }
    }

    public function createUser( array $parameters ){
        $insertUser = $this->queryBuilder
            ->insert()
            ->addTable("User")
            ->addColumn('first_name')
            ->addValue($parameters['firstName'])
            ->end();

        $insertContactInformation = $this->queryBuilder
            ->insert()
            ->addTable("Contact_information")
            ->addColumn('id_user')
            ->addColumn('email')
            ->addVariable('@userID')
            ->addValue($parameters['email'])
            ->end();

        $insertPassword = $this->queryBuilder
            ->insert()
            ->addTable("Password")
            ->addColumn('id_user')
            ->addColumn('password')
            ->addVariable('@userID')
            ->addValue($parameters['password'])
            ->end();

        $transationQuery =  'START TRANSACTION;'.
            $insertUser.' SET @userID = last_insert_id(); '.
            $insertContactInformation.' '.
            $insertPassword.' '.
            'COMMIT;';

        try {
            $this->executeStatment($transationQuery);
            return 'Użytkownik zarejstrowany pomyślnie';
        } catch( Response $exception ){
            return $exception;
        }
    }

    public function getBasicUserByEmail(string $email): array
    {
        $qb = new QueryBuilder();
        try {
            $query = $qb
                ->select()
                ->addColumns(['*'])
                ->addTable('Contact_information')
                ->innerJoin('User', 'id', 'id_user')
                ->innerJoin('Password', 'id_user', 'id_user')
                ->equals('email', $email)
                ->end();

            $resultFromDb = $this->getExecutedStatement($query);
            return $this->getObjectFromDatabaseResult($resultFromDb, 'getBasicUserFromQueryResult');

        } catch( Response $exception ){
            return $exception;
        }
    }

    public  function getUserByParameters(array $parameters){
        try {
            $query = $this->queryBuilder
                ->select()
                ->addColumns(['*'])
                ->addTable('Contact_information')
                ->innerJoin('User', 'id', 'id_user')
                ->innerJoin('Password', 'id', 'id_user')
                ->equals('User.id', $parameters['id'])
                ->equals("User.first_name", $parameters['firstName'])
                ->equals("User.last_name", $parameters['lastName'])
                ->equals("email",$parameters['email'])
                ->end();
            $resultFromDb = $this->getExecutedStatement($query);
            return $this->getObjectFromDatabaseResult($resultFromDb, 'getUserFromQueryResult');

        } catch( Response $exception ){
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
                ->innerJoin('Password', 'id', 'id_user')
                ->equals('email', $email)
                ->end();
            $resultFromDb = $this->getExecutedStatement($query);
            return $this->getObjectFromDatabaseResult($resultFromDb, 'getUserFromQueryResult');

        } catch( Response $exception ){
            return $exception;
        }
    }

    public function getBasicUserFromQueryResult( $basicUser ){
        return new BasicUser(
            $basicUser['id'],
            $basicUser['first_name'],
            $basicUser['email'],
            $basicUser['password']
        );
    }

    public function getUserFromQueryResult($user){
       return new User(
            $user['id'],
            $user['first_name'],
            $user['last_name'],
            $user['email'],
            $user['password'],
            $user['phone_number']
       );
    }
}