<?php
require_once __DIR__ . '/../../Models/Response.php';
require_once __DIR__.'/../../Utils/BindObject.php';
require_once __DIR__.'/../../Models/Advertisement.php';
require_once __DIR__.'/../../Models/Localization.php';
require_once __DIR__.'/../../Models/PropertyType.php';
require_once __DIR__.'/../../Models/User.php';
require_once __DIR__ . '/../FacilitiesRepository.php';
require_once 'constants.php';

class AdvertisementRepository extends Repository {

    public function getBasicAdvertisementsByParameters( $parameters ){
        try {
            $query = $this->queryBuilder
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
        } catch( Response $exception){
            return $exception;
        }
    }

    public function getAdvertisementsByParameters( $parameters ){
        try {
            $query = $this->queryBuilder
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
                ->equals('User.id', $parameters['idUser'])
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
        } catch( Response $exception){
            return $exception;
        }
    }

    public function deleteAdvertisementByUserID( $id, $idUser ){
        $query = $this->queryBuilder
            ->delete()
            ->addTable("Advertisement")
            ->equals('id', $id)
            ->equals("id_user", $idUser)
            ->end();
        try{
            $this->executeStatment($query);
        }catch(Response $exception){
            return$exception;
        }
    }

    public function insertAdvertisement($advertisement){
        var_dump($advertisement);
        $localization = $advertisement->localization;
        $price = $advertisement->price;
        $typeId = $advertisement->typeId;
        $userId = $advertisement->user->getId();
        $facilities =  $advertisement->facilities;

        $facilitiesQuery = '';
        foreach ($facilities as $facility){
            $facilitiesQuery .= $this->queryBuilder
                                        ->insert()
                                        ->addTable('Advertisement_Facilities')
                                        ->addColumn('id_advertisement')
                                        ->addColumn('id_facilities')
                                        ->addSubQuery('@advertisement_id')
                                        ->addSubQuery($facility->id)
                                        ->end();
        };

        $query = "START TRANSACTION;
            INSERT IGNORE INTO City(name) values('$localization->city');
            SET @city_ID = ( Select id from City where name like '$localization->city' );
            INSERT Ignore Into District(name, id_city) values('$localization->district', @city_id);
            SET @district_district = ( Select id from District where name like '$localization->district' and id_city like @city_ID );
            INSERT into Localization(longitude, latitude, street, flat_number, street_number, id_district, postal_code)
            values ('$localization->longitude', '$localization->latitude', '$localization->street', '$localization->flatNumber', '$localization->streetNumber', @district_district,'$localization->postalCode' );
            SET @localization_id = last_insert_id();
            INSERT into Price(price, are_media_included, commission) values ('$price->price', '$price->areMediaIncluded', '$price->commission');
            SET @price_id = last_insert_id();
            SET @propTypeId = (Select id from Property_type WHERE enum LIKE '$typeId');
            INSERT into Advertisement(added_time, id_property_type, area, id_user, id_localization, id_price, title)
            values (CURRENT_TIME, @propTypeId, '$advertisement->area', $userId , @localization_id, @price_id, '$advertisement->title');
            SET @advertisement_id = last_insert_id();
            $facilitiesQuery
        COMMIT;";
        try{
            $this->executeStatment($query);
            return new Response('Dodano ogłoszenie', 200);
        }catch(Response $response){
            return $response;
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

        $type = new PropertyType(
            $advertisement['id_type'],
            $advertisement['name'],
            $advertisement['enum'],
        );

        return new BasicAdvertisement(
            $advertisement['id'],
            $advertisement['title'],
            $localization,
            $price,
            $advertisement['area'],
            $type,
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

        $type = new PropertyType(
            $advertisement['id_type'],
            $advertisement['name'],
            $advertisement['enum'],
        );

        return  new Advertisement(
            $advertisement['id'],
            $advertisement['title'],
            $localization,
            $price,
            $advertisement['area'],
            $type,
            $user,
            $facilities,
            array(),
            $advertisement['added_time']
        );
    }
}