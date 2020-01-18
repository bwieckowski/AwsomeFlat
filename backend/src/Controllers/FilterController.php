<?php

require_once 'Controller.php';
require_once __DIR__.'/../Repositories/PropertyTypeRepository.php';
require_once __DIR__.'/../Repositories/DistrictRepository.php';
require_once __DIR__.'/../Repositories/FacilitiesRepository.php';
require_once __DIR__.'/../Models/Filter.php';

class FilterController extends Controller {

    public function getFilterProperties(){
        $propertyTypesRepository = new PropertyTypeRepository();
        $propertyTypes = $propertyTypesRepository->getAllPropertyTypes();
        $districts = [];
        $facilities = [];

        if($_GET['city']) {
            $districtsRepository = new DistrictRepository();
            $districts = $districtsRepository->getDistrictByCity($_GET['city']);
            if(sizeof($districts)){
                $facilitiesRepository = new FacilitiesRepository();
                $facilities = $facilitiesRepository->getFacilitiesByCity($_GET['city']);

            }
        }

        $filter = new Filter(
            $_GET['city'],
            $propertyTypes,
            $districts,
            $facilities,
        );

        $this->renderObject($filter->toJSON());
    }
}