<?php

require_once 'UserRepository.php';
require_once 'LocalizationRepository.php';
require_once 'PriceRepository.php';
require_once __DIR__ . '/../Models/ErrorResponse.php';
require_once  __DIR__.'/../Utils/BindObject.php';
require_once __DIR__.'/../Models/Advertisement.php';
require_once __DIR__.'/../Models/Localization.php';
require_once __DIR__.'/../Models/User.php';
require_once  __DIR__.'/../Utils/QueryBuilder/QueryBuilder.php';

class AdvertisementRepository extends Repository {

    private $userRepository;
    private $localizationRepository;
    private $priceRepository;

    public function __construct()
    {
        parent::__construct();
        $this->userRepository = new UserRepository();
        $this->localizationRepository = new LocalizationRepository();
        $this->priceRepository = new PriceRepository();
    }


    public function getAdvertisementsByParameters( $parameters ){
        $qb = new QueryBuilder();
        try {
            $query = $qb
                ->select()
                ->addColumns([
                    'id' => 'Advertisement.id',
                    'added_time',
                    'title',
                    'id_price',
                    'area',
                    'type' => 'Property_type.name',
                    'longitude'=>'Localization.longitude',
                    'latitude'=>'Localization.latitude',
                    'street' => 'Localization.street',
                    'postalCode' => 'Localization.postal_code',
                    'flatNumber' => 'Localization.flat_number',
                    'streetNumber' => 'Localization.street_number',
                    'district' => 'District.name',
                    'city' => 'City.name',
                    'id_localization',
                    'userId'=>'Contact_information.id_user',
                    'firstName'=>'first_name',
                    'lastName'=>'last_name',
                    'email',
                    'phoneNumber'=>'phone_number',
                    'priceId' => 'Price.id',
                    'price',
                    'areMediaIncluded' => 'are_media_included',
                    'commission'
                ])
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
            return $this->createAdvertisementByQuery($query);
        } catch( ErrorResponse $exception){
            return $exception;
        }
    }


    private function getAdvertisementFromQueryResult($advertisement ): Advertisement {

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
            $user,
            $advertisement['area'],
            $advertisement['type'],
            array(),
            array(),
            $advertisement['added_time']
        );
    }

    private function createAdvertisementByQuery($query, $bindObjects = null){
        $advertisements = $this->getExecutedStatement($query, $bindObjects);
        if($advertisements === false) {
            throw new ErrorResponse('Brak danych w bazie');
        }
        $result = [];
        foreach ($advertisements as $advertisement){
            $result[] =$this->getAdvertisementFromQueryResult($advertisement);
        }
        return $result;
    }
}