<?php
require_once __DIR__.'/../Models/Price.php';

class PriceRepository extends Repository {

    public function getPriceById( string $id ):? Price{
        try {
            $query = $this->queryBuilder
                ->select()
                ->addColumns(['*'])
                ->addTable('Price')
                ->equals('id', $id);

            $resultFromDb = $this->getExecutedStatement($query);
            return $this->getObjectFromDatabaseResult($resultFromDb, 'getLocalizationFromQueryResult');
        } catch( ErrorResponse $error){
            die( $error->getMessage() );
        }
    }

    private function getPriceFromQueryResult($price){
        return new Price(
            $price['id'],
            $price['price'],
            $price['are_media_included'],
            $price['commission']);
    }

}