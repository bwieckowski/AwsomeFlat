<?php

require_once 'ProtectedController.php';
require_once __DIR__.'/../Models/AddOfferInitial.php';

class UserPanelController extends ProtectedController{

    public function getInitialData(){
        $this->authenticate($_POST['jwt']);

        $propertyTypesRepository = new PropertyTypeRepository();
        $propertyTypes = $propertyTypesRepository->getAllPropertyTypes();

        $facilitiesRepository = new FacilitiesRepository();
        $property = [];
        $property['id'] = null;
        $facilities = $facilitiesRepository->getFacilitiesByParams($property);

        $addOfferInitial = new AddOfferInitial(
            $propertyTypes,
            $facilities,
            $this->user
        );

        $this->renderObject($addOfferInitial->toJSON());
    }
}