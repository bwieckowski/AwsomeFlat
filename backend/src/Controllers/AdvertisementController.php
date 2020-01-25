<?php
require_once __DIR__."/../Repositories/AdvertisementRepository/AdvertisementRepository.php";
require_once  __DIR__.'/../Models/Advertisement.php';

class AdvertisementController extends ProtectedController {
    private $advertisementRepository;

    public function __construct(){
        $this->advertisementRepository = new AdvertisementRepository();
    }

    public function insertAdvertisement(){
        $incoming = json_decode($_POST['advertisement']);
        $this->authenticate($incoming->jwt);
        $incoming->user = $this->user;
        $response = $this->advertisementRepository->insertAdvertisement($incoming);
        $this->renderObject($response->toJSON());
    }

    public function getAdvertisements() {
            $advertisements =  $this->advertisementRepository->getAdvertisementsByParameters($_GET);
            $this->renderArray($advertisements);
    }

    public function getUserAdvertisements() {
        $this->authenticate($_POST['jwt']);
        $parameters['idUser'] = $this->user->getId();
        $advertisements = $this->advertisementRepository->getAdvertisementsByParameters($parameters);
        $this->renderArray($advertisements);
    }

    public function deleteUserAdvertisement( $parameters ){
        var_dump($parameters);
        $this->authenticate($parameters['jwt']);
        try {
            $this->parametersHasAllKeys($parameters, ['id']);
            $this->advertisementRepository->deleteAdvertisementByUserID($parameters['id'], $this->user->getId());
        } catch (Response $e) {
            die($e->toJSON());
        }

    }

    public function getBasicAdvertisements() {
        $advertisements =  $this->advertisementRepository->getBasicAdvertisementsByParameters($_GET);
        $this->renderArray($advertisements);
    }

}