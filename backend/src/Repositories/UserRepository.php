<?php

require_once __DIR__.'/../Models/User.php';
require_once  __DIR__.'/../Utils/BindObject.php';
require_once  __DIR__.'/../Utils/QueryBuilder/QueryBuilder.php';
require_once 'Repository.php';

class UserRepository extends Repository {

    public function getUserById(string $id): ?User{
        $qb = new QueryBuilder();
        $query = $qb
            ->select()
            ->addColumns(['*'])
            ->addTable('Contact_information')
            ->innerJoin('User','id','id_user')
            ->where()
            ->equals('User.id',':id')
            ->end();

        $bindObject = new BindObject(':id', $id, PDO::PARAM_STR);
        return $this->createUserFromQuery($query, array($bindObject));
    }

    public  function getUserByParameters(array $parameters){
        $qb = new QueryBuilder();
        try {
            $query = $qb
                ->select()
                ->addColumns(['*'])
                ->addTable('Contact_information')
                ->innerJoin('User', 'id', 'id_user')
                ->equals('User.id', $parameters['id'])
                ->equals("User.first_name", $parameters['firstName'])
                ->equals("User.last_name", $parameters['lastName'])
                ->equals("email",$parameters['email'])
                ->end();
            return $this->createUserFromQuery($query);

        } catch( ErrorResponse $exception ){
            return $exception;
        }

    }

    public function getUserByEmail(string $email): ?User
    {
        $query = '
            SELECT * FROM Contact_information 
            inner join User
            on Contact_information.id_user = User.id
            WHERE email = :email;
        ';

        $bindObject = new BindObject(':email', $email, PDO::PARAM_STR);
        return $this->createUserFromQuery($query, array($bindObject));
    }

    private function createUserFromQuery($query, $bindObjects = null){
        $users = $this->getExecutedStatement($query, $bindObjects, PDO::PARAM_STR);

        if($users === false) {
            throw new ErrorResponse('Brak danych w bazie');
        }

        $result = [];
        foreach ($users as $user){
            $result[] = new User(
                $user['id'],
                $user['first_name'],
                $user['last_name'],
                $user['email'],
                $user['phone_number'],
            );
        }

        return $result;

    }
}