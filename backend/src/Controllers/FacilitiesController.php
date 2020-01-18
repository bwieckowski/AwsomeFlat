<?php

require_once __DIR__ .'Controller.php';
require_once __DIR__ . '/../Repositories/FacilitiesRepository.php';

class FacilitiesController extends Controller {

        public function getFacilities(){
            $facilitiesRepository = new FacilitiesRepository();
            $facilities = $facilitiesRepository->getFacilitiesByParams($_GET);
            $this->renderArray($facilities);
        }
}
