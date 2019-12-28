<?php

require_once 'UserRepository.php';
require_once 'LocalizationRepository.php';
require_once 'PriceRepository.php';
require_once  __DIR__.'/../Utils/BindObject.php';
require_once __DIR__.'/../Models/Advertisement.php';
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


    function getAdvertisementById( string $id){
        $query = '
            SELECT * FROM Advertisement 
            inner join Property_type Pt on Advertisement.id_property_type = Pt.id
            inner join Localization L on Advertisement.id_localization = L.id
            inner join Price P on Advertisement.id_price = P.id
            inner join User U on Advertisement.id_user = U.id
            WHERE Advertisement.id = :id;
        ';
        $bindObject = new BindObject(':id', $id, PDO::PARAM_STR);
        return $this->createAdvertisementByQuery($query, $bindObject);
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
                    'id_localization',
                    'id_user'
                ])
                ->addTable('Advertisement')
                ->innerJoin('Property_type', 'id', 'id_property_type')
                ->innerJoin('Localization', 'id', 'id_localization')
                ->innerJoin('Price', 'id', 'id_price')
                ->innerJoin('User', 'id', 'id_user')
                ->innerJoin('District', 'id', 'id_district',"Localization")
                ->innerJoin('City', 'id', 'id_city',"District")
                ->equals('City.name', $parameters['city'])
                ->equals("District.name", $parameters['district'])
                ->moreThan("Price.price",$parameters['price_mt'])
                ->lessThan("Price.price",$parameters['price_lt'])
                ->between("Price.price",$parameters['price_between1'],$parameters['price_between2'])
                ->end();
            return $this->createAdvertisementByQuery($query);
        } catch( Error $exception){
            return null;
        }
    }


    private function getAdvertisementFromQueryResult($advertisement ): Advertisement {
        $user = $this->userRepository->getUserByParameters(['id'=>$advertisement['id_user']])[0];
        $localization = $this->localizationRepository->getLocalizationByParameters(['id'=>$advertisement['id_localization']])[0];
        $price = $this->priceRepository->getPriceById($advertisement['id_price']);

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
            throw new Error('','');
        }
        $result = [];
        foreach ($advertisements as $advertisement){
            $result[] =$this->getAdvertisementFromQueryResult($advertisement);
        }
        return $result;
    }
}