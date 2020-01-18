<?php

require_once "Repository.php";
require_once __DIR__ . "/../Models/PropertyType.php";

class FilterRepository extends Repository {

    protected function getTypesFromQueryResult($propertyType){
      return new PropertyType (
          $propertyType['id'],
          $propertyType['name'],
          $propertyType['enum']
      );
    }

    public function getFilterParameters(){
       $query = $this->queryBuilder
           ->select()
           ->addColumns(['id','name', 'enum'])
           ->addTable('Property_type')
           ->end();
        try {
            $resultFromDb = $this->getExecutedStatement($query);
            return $this->getObjectFromDatabaseResult($resultFromDb, 'getTypesFromQueryResult');
        } catch (Response $e) {
            return $e;
        }

    }

}