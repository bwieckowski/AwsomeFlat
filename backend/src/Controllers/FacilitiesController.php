<?php

require_once 'Controller.php';
require_once __DIR__ . '/../Repositories/FacilitiesRepository.php';

class FacilitiesController extends Controller {

        public function getFacilities(){
            $facilitiesRepository = new FacilitiesRepository();
            try {
                $this->parametersHasOneOrMoreKey($_GET,['id']);
                $facilities = $facilitiesRepository->getFacilitiesByParams($_GET);
                $this->renderArray($facilities);
            }catch(Response $response){
                echo $response->toJSON();
            }

        }

        public function getFacilitiesByAdvertisementId(){
            try {
                $this->parametersHasOneOrMoreKey($_GET, ['idCity']);
            } catch( Response $response) {
                die($response->toJSON());
            }

            $facilitiesRepository = new FacilitiesRepository();
            $facilities = $facilitiesRepository->getFacilitiesByAdvertisementId($_GET['idCity']);
            $this->renderArray($facilities);
        }
}
