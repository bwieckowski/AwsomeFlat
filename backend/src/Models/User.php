<?php

require_once 'Model.php';

class User implements Model {

    private $id;
    private $firstName;
    private $lastName;
    private $email;
    private $phone;

    /**
     * User constructor.
     * @param $id
     * @param $firstName
     * @param $lastName
     * @param $email
     * @param $phone
     */

    public function __construct(string $id,
                                string $firstName,
                                string $lastName,
                                string $email,
                                string $phone)
    {
        $this->id = $id;
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->email = $email;
        $this->phone = $phone;
    }

    public function toJSON(): string{
        return json_encode(get_object_vars($this), JSON_UNESCAPED_UNICODE);
    }

    public function toArray(): array{
        return get_object_vars($this);
    }
}