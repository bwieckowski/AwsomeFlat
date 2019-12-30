<?php

require_once __DIR__ .'Controller.php';
require_once __DIR__ . '/../Repositories/FacilitiesRepository.php';

class FacilitiesController extends Controller {

        public function getFacilities(){
            $facilitiesRepository = new FacilitiesRepository();
            $facilities = $facilitiesRepository->getFacilitiesByParams($_GET);
            $result = [];
            if($facilities != null) {
                foreach ($facilities as $facility) {
                    $result[] = $facility->toArray();
                }
                echo json_encode($result, JSON_UNESCAPED_UNICODE);
            }
            else
                $this->render('[]');
        }
}
