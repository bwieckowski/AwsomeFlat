<?php
require_once __DIR__."/../Repositories/AdvertisementRepository/AdvertisementRepository.php";
require_once  __DIR__.'/../Models/Advertisement.php';

class AdvertisementController{
    private $advertisementRepository;

    public function __construct(){
        $this->advertisementRepository = new AdvertisementRepository();
    }

    public function getAdvertisements() {
            $advertisements =  $this->advertisementRepository->getAdvertisementsByParameters($_GET);
            $result = [];
            foreach ($advertisements as $advertisement) {
               $result[] =  $advertisement->toArray();
            }
            echo json_encode($result,JSON_UNESCAPED_UNICODE);
    }

    public function getBasicAdvertisements() {
        $advertisements =  $this->advertisementRepository->getBasicAdvertisementsByParameters($_GET);
        $result = [];
        foreach ($advertisements as $advertisement) {
            $result[] =  $advertisement->toArray();
        }
        echo json_encode($result,JSON_UNESCAPED_UNICODE);
    }

}