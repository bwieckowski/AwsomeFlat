<?php
require_once __DIR__ . '/../Utils/Database.php';
require_once __DIR__ . '/../Utils/BindObject.php';
require_once __DIR__.'/../Models/index.php';

class Repository {
    protected $database;

    public function __construct()
    {
        $this->database = new Database();
    }

    protected function getExecutedStatement(string $query, array $bindObjects = null, int $data_type = PDO::FETCH_ASSOC ){
        $stmt = $this->database->connect()->prepare($query);

        if($bindObjects)
            foreach ($bindObjects as $bindObject){
                $stmt->bindParam($bindObject->getParameter(), $bindObject->getVariable(), $bindObject->getDataType());
            }

        $executeWasCorrect = $stmt->execute();
        if($executeWasCorrect === false) {
            throw new ErrorResponse('Brak danych w bazie');
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