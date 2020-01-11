<?php
require_once __DIR__.'/../Models/Price.php';

class PriceRepository extends Repository {

    public function getPriceById( string $id ):? Price{

        $query = 'Select *from Price where id = :id';

        $bindObject = new BindObject(':id', $id, PDO::PARAM_STR);
        try {
            $price = $this->getExecutedStatement($query, array($bindObject))[0];

            return new Price(
                $price['id'],
                $price['price'],
                $price['are_media_included'],
                $price['commission']);
        } catch(ErrorResponse $exception){
            die( $exception->getMessage() );
        }
    }

}