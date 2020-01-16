<?php

require_once "Repository.php";
require_once __DIR__ . "/../Models/Facility.php";
require_once __DIR__.'/../Utils/QueryBuilder/QueryBuilder.php';

class FacilitiesRepository extends Repository {

    public function getFacilitiesByParams( $params ){
        try{
            $query = $this->queryBuilder
                ->select()
                ->addColumns(['id','name'])
                ->addTable("Facilities")
                ->equals("id", $params['id'])
                ->end();
            $resultFromDb = $this->getExecutedStatement($query);
            return $this->getFacilityFromQueryResult($resultFromDb);
        } catch ( Response $exception){
            return $exception;
        }
    }

    public function getFacilitiesByAdvertisementId( $facilitiesId ){
        try{
            $query = $this->queryBuilder
                ->select()
                ->addColumns(['id'=>'Facilities.id','name'])
                ->addTable("Advertisement_Facilities")
                ->innerJoin("Facilities","id","id_facilities")
                ->equals("id_advertisement", $facilitiesId)
                ->end();

            $resultFromDb = $this->getExecutedStatement($query);
            return $this->getObjectFromDatabaseResult($resultFromDb, 'getFacilityFromQueryResult');
        } catch ( Response $exception){
            return $exception;
        }
    }


    protected function getFacilityFromQueryResult($facility){
        return new Facility( $facility['id'], $facility['name'] );
    }
}