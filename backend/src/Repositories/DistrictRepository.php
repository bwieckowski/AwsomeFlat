<?php

require_once "Repository.php";
require_once __DIR__ . "/../Models/District.php";

class DistrictRepository extends Repository
{

    protected function getTypesFromQueryResult($propertyType){
        return new District (
            $propertyType['id'],
            $propertyType['name'],
        );
    }

    function getDistrictByCity($city){
        $query = $this->queryBuilder
            ->select()
            ->addColumns([
                'id' => 'District.id',
                'name' => 'District.name',
                'city' => 'City.name'
                ])
            ->addTable('Advertisement')
            ->innerJoin('Localization', 'id','id_localization', )
            ->innerJoin('District', 'id', 'id_district', 'Localization')
            ->innerJoin('City','id', 'id_city',"District")
            ->equals('City.name',$city)
            ->groupBy('District.name')
            ->end();

        try {
            $resultFromDb = $this->getExecutedStatement($query);
            return $this->getObjectFromDatabaseResult($resultFromDb, 'getTypesFromQueryResult');
        } catch (Response $e) {
        }

    }
}