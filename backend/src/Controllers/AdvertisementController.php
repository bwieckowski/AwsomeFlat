<?php
require_once __DIR__."/../Repositories/AdvertisementRepository/AdvertisementRepository.php";
require_once  __DIR__.'/../Models/Advertisement.php';

class AdvertisementController extends Controller {
    private $advertisementRepository;

    public function __construct(){
        $this->advertisementRepository = new AdvertisementRepository();
    }

    public function getAdvertisements() {
            $advertisements =  $this->advertisementRepository->getAdvertisementsByParameters($_GET);
            $this->renderArray($advertisements);
    }

    public function getBasicAdvertisements() {
        $advertisements =  $this->advertisementRepository->getBasicAdvertisementsByParameters($_GET);
        $this->renderArray($advertisements);
    }

}