<?php
require_once __DIR__.'/../Models/Localization.php';
require_once __DIR__.'/../Utils/QueryBuilder/QueryBuilder.php';

class LocalizationRepository extends Repository {

    public function getLocalizationByParameters(array $parameters )
    {
        $qb = new QueryBuilder();
        try {
            $query = $qb
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
            return $this->createLocalizationsByQuery($query);

        }catch (Error $error) {
            return null;
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

    private function createLocalizationsByQuery($query, $bindObjects = null){
        $localizations = $this->getExecutedStatement($query, $bindObjects);
        if($localizations === false) {
            throw new Error('','');
        }

        $result = [];
        foreach ($localizations as $localization){
            $result[] =$this->getLocalizationFromQueryResult($localization);
        }
        return $result;
    }


}