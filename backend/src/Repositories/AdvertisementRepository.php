<?php

require_once 'UserRepository.php';
require_once 'LocalizationRepository.php';
require_once 'PriceRepository.php';
require_once __DIR__.'/../Models/Advertisement.php';

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

    function getAllAdvertisements(){
        $query = '
            SELECT * FROM Advertisement 
            inner join Property_type Pt on Advertisement.id_property_type = Pt.id
            inner join Localization L on Advertisement.id_localization = L.id
            inner join Price P on Advertisement.id_price = P.id
            inner join User U on Advertisement.id_user = U.id;
        ';

        return $this->createAdvertisementByQuery($query);
    }

    public function getAdvertisementsByCity( $city ){
        $query = '
            SELECT Advertisement.id, added_time, title,id_price, area, Pt.name as type, id_localization, id_user
            FROM Advertisement 
            inner join Property_type Pt on Advertisement.id_property_type = Pt.id
            inner join Localization L on Advertisement.id_localization = L.id
            inner join District D on L.id_district = D.id
            inner join City C on D.id_city = C.id  
            WHERE C.name = :city;
        ';

        $bindObject = new BindObject(':city', $city, PDO::PARAM_STR);
        return $this->createAdvertisementByQuery($query, array($bindObject));
    }


    private function createAdvertisementByQuery($query, $bindObjects = null){
        $advertisements = $this->getExecutedStatement($query, $bindObjects);

        if($advertisements === false) {
            throw new Error('','');
        }

        $result = [];
        foreach ($advertisements as $advertisement){

            $user = $this->userRepository->getUserById($advertisement['id_user']);
            $localization = $this->localizationRepository->getLocalizationById($advertisement['id_localization']);
            $price = $this->priceRepository->getPriceById($advertisement['id_price']);

            $result[] = new Advertisement(
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
        return $result;
    }
}