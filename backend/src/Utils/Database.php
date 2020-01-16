<?php
require_once __DIR__.'/../config.php';
require_once __DIR__ . '/../Models/Response.php';

class Database {
    private $username;
    private $password;
    private $host;
    private $database;

    public function __construct()
    {
        $this->username = USERNAME;
        $this->password = PASSWORD;
        $this->host = HOST;
        $this->database = DATABASE;
    }

    public function connect()
    {
        try {
            $conn = new PDO(
                "mysql:host=$this->host;dbname=$this->database",
                $this->username,
                $this->password
            );

            // set the PDO error mode to exception
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        }
        catch(PDOException $e) {
            $error = new Response($e->getMessage(),404);
            die( $error->toJSON() );
        }
    }
}