<?php

require_once 'Model.php';

class BasicUser implements Model{
    protected $id;

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id): void
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getFirstName()
    {
        return $this->firstName;
    }

    /**
     * @param mixed $firstName
     */
    public function setFirstName($firstName): void
    {
        $this->firstName = $firstName;
    }

    /**
     * @return mixed
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * @param mixed $email
     */
    public function setEmail($email): void
    {
        $this->email = $email;
    }

    /**
     * @return mixed
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * @param mixed $password
     */
    public function setPassword($password): void
    {
        $this->password = $password;
    }
    protected $firstName;
    protected $email;
    protected $password;


    function __construct(
                $id,
                $firstName,
                $email,
                $password)
    {
        $this->id = $id;
        $this->firstName = $firstName;
        $this->email = $email;
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
                                string $password,
                                $phone)
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
        return json_encode(get_object_vars($this), JSON_UNESCAPED_UNICODE);
    }

    public function toArray(): array{
        return get_object_vars($this);
    }
}