<?php
require_once __DIR__ . '/../Utils/Database.php';
require_once __DIR__ . '/../Utils/BindObject.php';
require_once __DIR__.'/../Models/index.php';
require_once __DIR__.'/../Utils/QueryBuilder/QueryBuilder.php';

class Repository {
    private $database;
    protected $queryBuilder;

    public function __construct()
    {
        $this->database = new Database();
        $this->queryBuilder = new QueryBuilder();
    }

    protected function executeStatment(string $query){
        try {
            $stmt = $this->database->connect()->prepare($query);
            $stmt->execute();
        } catch(PDOException $e){
            throw new Response('Nie udało się dodać danych');
        }
    }

    protected function getExecutedStatement(string $query, array $bindObjects = null, int $data_type = PDO::FETCH_ASSOC ){
        $stmt = $this->database->connect()->prepare($query);

        if($bindObjects)
            foreach ($bindObjects as $bindObject){
                $stmt->bindParam($bindObject->getParameter(), $bindObject->getVariable(), $bindObject->getDataType());
            }

        $executeWasCorrect = $stmt->execute();
        if($executeWasCorrect === false) {
            throw new Response('Brak danych w bazie');
        }

        return $stmt->fetchAll($data_type);
    }

    protected  function getObjectFromDatabaseResult($objectFromDB, $function){
        $result = [];
        foreach ( $objectFromDB as $databaseResult){
            $result[] = $this->$function($databaseResult);
        }
        return $result;
    }
}