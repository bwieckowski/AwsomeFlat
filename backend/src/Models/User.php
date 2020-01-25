<?php

require_once 'Model.php';


class BasicUser implements Model {

    protected $firstName;
    protected $email;
    protected $password;


    function __construct(
        $id,
        $firstName,
        $email,
        $password = '')
    {
        $this->id = $id;
        $this->firstName = $firstName;
        $this->email = $email;
        $this->password = $password;
    }

    protected $id;

    public function unsetPassword(){
        unset($this->password);
    }

    public function getId()
    {
        return $this->id;
    }

    public function setId($id): void
    {
        $this->id = $id;
    }

    public function getFirstName()
    {
        return $this->firstName;
    }

    public function setFirstName($firstName): void
    {
        $this->firstName = $firstName;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function setEmail($email): void
    {
        $this->email = $email;
    }

    public function getPassword()
    {
        return $this->password;
    }

    public function setPassword($password): void
    {
        $this->password = $password;
    }

    public function toJSON(): string{
        return json_encode(get_object_vars($this), JSON_UNESCAPED_UNICODE);
    }

    public function toArray(): array{
        return get_object_vars($this);
    }
}

class User extends BasicUser {

    private $lastName;
    private $phone;

    /**
     * User constructor.
     * @param string $id
     * @param string $firstName
     * @param string $lastName
     * @param string $email
     * @param string $password
     * @param string $phone
     */

    public function __construct(string $id,
                                string $firstName,
                                $lastName,
                                string $email,
                                $phone,
                                string $password = ''
                            )
    {

        parent::__construct(
            $id,
            $firstName,
            $email,
            $password,
        );

        $this->lastName = $lastName;
        $this->phone = $phone;
    }


    public function toJSON(): string{
        return json_encode($this->toArray(), JSON_UNESCAPED_UNICODE);
    }

    public function toArray(): array{
        if($this->password == '')
            unset($this->password);
        return get_object_vars($this);
    }
}