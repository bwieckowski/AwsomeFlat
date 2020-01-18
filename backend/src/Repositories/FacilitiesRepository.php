<?php

require_once "Repository.php";
require_once __DIR__ . "/../Models/Facility.php";

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

    public function getFacilitiesByCity($city){
        $query = "Select F.name, F.id From Advertisement_Facilities
            inner JOIN Facilities F on Advertisement_Facilities.id_facilities = F.id
            where id_advertisement IN  (
                Select Advertisement.id from Advertisement
            inner JOIN  Localization L on Advertisement.id_localization = L.id
            inner Join District D on L.id_district = D.id
            inner JOIN City C on D.id_city = C.id
            where C.name = '$city')
            group by F.name;";
        try{
            $resultFromDb = $this->getExecutedStatement($query);
            return $this->getObjectFromDatabaseResult($resultFromDb, 'getFacilityFromQueryResult');
        } catch ( Response $exception){
            return $exception;
        }
    }

    public function getFacilitiesByAdvertisementId( $facilitiesId ){
        $query = $this->queryBuilder
            ->select()
            ->addColumns(['id'=>'Facilities.id','name'])
            ->addTable("Advertisement_Facilities")
            ->innerJoin("Facilities","id","id_facilities")
            ->equals("id_advertisement", $facilitiesId)
            ->end();

        try{
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