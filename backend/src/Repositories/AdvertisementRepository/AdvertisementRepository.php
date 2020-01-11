<?php
require_once __DIR__ . '/../../Models/ErrorResponse.php';
require_once __DIR__.'/../../Utils/BindObject.php';
require_once __DIR__.'/../../Models/Advertisement.php';
require_once __DIR__.'/../../Models/Localization.php';
require_once __DIR__.'/../../Models/User.php';
require_once __DIR__.'/../../Utils/QueryBuilder/QueryBuilder.php';
require_once __DIR__ . '/../FacilitiesRepository.php';
require_once 'constants.php';

class AdvertisementRepository extends Repository {

    public function getBasicAdvertisementsByParameters( $parameters ){
        $qb = new QueryBuilder();
        try {
            $query = $qb
                ->select()
                ->addColumns(basic_advertisement_columns_name)
                ->addTable('Advertisement')
                ->innerJoin('Property_type', 'id', 'id_property_type')
                ->innerJoin('Localization', 'id', 'id_localization')
                ->innerJoin('Price', 'id', 'id_price')
                ->innerJoin('District', 'id', 'id_district',"Localization")
                ->innerJoin('City', 'id', 'id_city',"District")
                ->equals('City.name', $parameters['city'])
                ->equals('Property_type.name', $parameters['type'])
                ->equals("District.name", $parameters['district'])
                ->moreThan("area",$parameters['area_mt'])
                ->lessThan("area",$parameters['area_lt'])
                ->between("area",$parameters['area_between1'],$parameters['area_between2'])
                ->moreThan("Price.price",$parameters['price_mt'])
                ->lessThan("Price.price",$parameters['price_lt'])
                ->between("Price.price",$parameters['price_between1'],$parameters['price_between2'])
                ->end();
            $resultFromDb = $this->getExecutedStatement($query );
            return $this->getObjectFromDatabaseResult($resultFromDb, 'getBasicAdvertisementFromQueryResult');
        } catch( ErrorResponse $exception){
            return $exception;
        }
    }

    public function getAdvertisementsByParameters( $parameters ){
        $qb = new QueryBuilder();
        try {
            $query = $qb
                ->select()
                ->addColumns(advertisement_columns_name)
                ->addTable('Advertisement')
                ->innerJoin('Property_type', 'id', 'id_property_type')
                ->innerJoin('Localization', 'id', 'id_localization')
                ->innerJoin('Price', 'id', 'id_price')
                ->innerJoin('User', 'id', 'id_user')
                ->innerJoin('Contact_information', 'id_user', 'id','User')
                ->innerJoin('District', 'id', 'id_district',"Localization")
                ->innerJoin('City', 'id', 'id_city',"District")
                ->equals('City.name', $parameters['city'])
                ->equals('Property_type.name', $parameters['type'])
                ->equals("District.name", $parameters['district'])
                ->moreThan("area",$parameters['area_mt'])
                ->lessThan("area",$parameters['area_lt'])
                ->between("area",$parameters['area_between1'],$parameters['area_between2'])
                ->moreThan("Price.price",$parameters['price_mt'])
                ->lessThan("Price.price",$parameters['price_lt'])
                ->between("Price.price",$parameters['price_between1'],$parameters['price_between2'])
                ->end();
            $resultFromDb = $this->getExecutedStatement($query );
            return $this->getObjectFromDatabaseResult($resultFromDb, 'getAdvertisementFromQueryResult');
        } catch( ErrorResponse $exception){
            return $exception;
        }
    }

    protected function getBasicAdvertisementFromQueryResult( $advertisement ): BasicAdvertisement {
        $price = new Price(
            $advertisement['priceId'],
            $advertisement['price'],
            $advertisement['areMediaIncluded'],
            $advertisement['commission']
        );

        $localization = new Localization(
            $advertisement['id_localization'],
            $advertisement['longitude'],
            $advertisement['latitude'],
            $advertisement['street'],
            $advertisement['flatNumber'],
            $advertisement['streetNumber'],
            $advertisement['district'],
            $advertisement['city'],
            $advertisement['postalCode']
        );

        return new BasicAdvertisement(
            $advertisement['id'],
            $advertisement['title'],
            $localization,
            $price,
            $advertisement['area'],
            $advertisement['type'],
        );
    }

    protected function getAdvertisementFromQueryResult( $advertisement ): Advertisement {
        $facilitiesRepository = new FacilitiesRepository();
        $facilities = $facilitiesRepository->getFacilitiesByAdvertisementId($advertisement['id']);

        $price = new Price(
            $advertisement['priceId'],
            $advertisement['price'],
            $advertisement['areMediaIncluded'],
            $advertisement['commission']
        );

        $user = new User(
            $advertisement['userId'],
            $advertisement['firstName'],
            $advertisement['lastName'],
            $advertisement['email'],
            $advertisement['phoneNumber'],
        );

        $localization = new Localization(
            $advertisement['id_localization'],
            $advertisement['longitude'],
            $advertisement['latitude'],
            $advertisement['street'],
            $advertisement['flatNumber'],
            $advertisement['streetNumber'],
            $advertisement['district'],
            $advertisement['city'],
            $advertisement['postalCode']
        );

        return  new Advertisement(
            $advertisement['id'],
            $advertisement['title'],
            $localization,
            $price,
            $advertisement['area'],
            $advertisement['type'],
            $user,
            $facilities,
            array(),
            $advertisement['added_time']
        );
    }
}