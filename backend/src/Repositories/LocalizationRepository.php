<?php
require_once __DIR__.'/../Models/Localization.php';

class LocalizationRepository extends Repository {

    public function getLocalizationById( string $id ):? Localization{

        $query = ' Select Localization.id, 
                        longitude, 
                        latitude, 
                        street, 
                        flat_number, 
                        street_number,
                        D.name as city,
                        C.name as district,
                        postal_code 
                    from Localization 
                    inner join District D on Localization.id_district = D.id
                    inner join City C on D.id_city = C.id
                    where Localization.id = :id ';

        $bindObject = new BindObject(':id', $id, PDO::PARAM_STR);
        $loca = $this->getExecutedStatement($query, array($bindObject))[0];

        return new Localization( $loca['id'],
                                 $loca['longitude'],
                                 $loca['latitude'],
                                 $loca['street'],
                                 $loca['flat_number'],
                                 $loca['street_number'],
                                 $loca['district'],
                                 $loca['city'],
                                 $loca['postal_code'],
                                );
    }
}