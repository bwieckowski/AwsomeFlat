<?php

require_once __DIR__.'/../Models/User.php';
require_once 'Repository.php';

class UserRepository extends Repository {

    public function getUserById(string $id): ?User{
        $query = '
            SELECT * FROM Contact_information 
            inner join User
            on Contact_information.id_user = User.id
            WHERE User.id = :id;
        ';

        $bindObject = new BindObject(':id', $id, PDO::PARAM_STR);
        return $this->createUserFromQuery($query, array($bindObject));
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

    private function createUserFromQuery($query, $bindObjects){
        $users = $this->getExecutedStatement($query, $bindObjects, PDO::PARAM_STR);

        if($users === false) {
            throw new Error('','');
        }
        if ( sizeof($users) === 1) {
            $user = $users[0];
            return new User(
                $user['id'],
                $user['first_name'],
                $user['last_name'],
                $user['email'],
                $user['phone_number'],
            );
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