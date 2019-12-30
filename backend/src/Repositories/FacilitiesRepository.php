<?php

require_once "Repository.php";
require_once __DIR__ . "/../Models/Facility.php";
require_once __DIR__.'/../Utils/QueryBuilder/QueryBuilder.php';

class FacilitiesRepository extends Repository {

    private $qb;

    public function __construct(){
        parent::__construct();
        $this->qb = new QueryBuilder();
    }

    public function getFacilitiesByParams( $params ){
        try{
            $query = $this->qb->select()
                ->addColumns(['id','name'])
                ->addTable("Facilities")
                ->equals("id", $params['id'])
                ->end();
            return $this->createFacilitiesByQuery($query);
        } catch ( ErrorResponse $exception){
            return $exception;
        }
    }

    public function getFacilitiesByAdvertisementId( $facilitiesId ){
        try{
            $query = $this->qb->select()
                ->addColumns(['id'=>'Facilities.id','name'])
                ->addTable("Advertisement_Facilities")
                ->innerJoin("Facilities","id","id_facilities")
                ->equals("id_advertisement", $facilitiesId)
                ->end();

            return $this->createFacilitiesByQuery($query);
        } catch ( ErrorResponse $exception){
            return $exception;
        }
    }

    private function getFacilityFromQueryResult($facility){
        return new Facility( $facility['id'], $facility['name'] );
    }

    private function createFacilitiesByQuery($query){
        $facilities = $this->getExecutedStatement($query);
        if($facilities === false) {
            throw new ErrorResponse('Brak danych w bazie');
        }

        $result = [];
        foreach ($facilities as $facility){
            $result[] =$this->getFacilityFromQueryResult($facility);
        }
        return $result;
    }
}