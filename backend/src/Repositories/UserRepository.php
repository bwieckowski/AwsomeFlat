<?php

require_once __DIR__.'/../Models/User.php';
require_once 'Repository.php';

class UserRepository extends Repository {

    public function getUser(string $email): ?User
    {
        $query = '
            SELECT * FROM Contact_information 
            inner join User
            on Contact_information.id_user = User.id
            WHERE email = :email;
        ';
        $stmt = $this->database->connect()->prepare($query);

        $stmt->bindParam(':email', $email, PDO::PARAM_STR);
        $stmt->execute();

        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if($user == false) {
            throw new Error('','');
        }

        return new User(
            $user['id'],
            $user['first_name'],
            $user['last_name'],
            $user['email'],
            $user['phone_number'],
        );
    }
}