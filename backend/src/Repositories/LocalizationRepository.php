<?php
require_once __DIR__.'/../Models/Localization.php';
require_once __DIR__.'/../Utils/QueryBuilder/QueryBuilder.php';

class LocalizationRepository extends Repository {

    public function getLocalizationByParameters(array $parameters )
    {
        try {
            $query = $this->queryBuilder
                ->select()
                ->addColumns([
                    'id' => 'Localization.id',
                    'longitude',
                    'latitude',
                    'street',
                    'street_number',
                    'flat_number',
                    'city' => 'City.name',
                    'district' => 'District.name',
                    'postal_code'
                ])
                ->addTable('Localization')
                ->innerJoin('District', 'id', 'id_district')
                ->innerJoin('City', 'id', 'id_city', "District")
                ->equals('City.name', $parameters['city'])
                ->equals("District.name", $parameters['district'])
                ->equals("Localization.id", $parameters['id'])
                ->end();
            $resultFromDb = $this->getExecutedStatement($query);
            return $this->getObjectFromDatabaseResult($resultFromDb, 'getLocalizationFromQueryResult');

        } catch(Response $exception) {
            return $exception;
        }

    }

    private function getLocalizationFromQueryResult($localization){
        return new Localization( $localization['id'],
            $localization['longitude'],
            $localization['latitude'],
            $localization['street'],
            $localization['flat_number'],
            $localization['street_number'],
            $localization['district'],
            $localization['city'],
            $localization['postal_code'],
        );
    }


}