<?php
require_once __DIR__."/../Repositories/AdvertisementRepository.php";
require_once  __DIR__.'/../Models/Advertisement.php';

class AdvertisementController{
    private $advertisementRepository;

    public function __construct(){
        $this->advertisementRepository = new AdvertisementRepository();
    }

    public function getAdvertisements() {

        if(isset($_GET['city'])){
            $advertaisments =  $this->advertisementRepository->getAdvertisementsByCity($_GET['city']);
            $result = [];
            foreach ($advertaisments as $advertaisment) {
               $result[] =  $advertaisment->toArray();
            }
            echo json_encode($result,JSON_UNESCAPED_UNICODE);
        }

       // $this->advertisementRepository->getAllAdvertisements();
    }

}