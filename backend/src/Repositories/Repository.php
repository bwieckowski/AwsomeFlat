<?php
require_once __DIR__ . '/../Utils/Database.php';
require_once __DIR__ . '/../Utils/BindObject.php';
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

        $stmt->execute();
        return $stmt->fetchAll($data_type);
    }
}