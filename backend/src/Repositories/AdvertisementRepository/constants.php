<?php

define( 'advertisement_columns_name', [
    'id' => 'Advertisement.id',
    'added_time',
    'title',
    'id_price',
    'area',
    'type' => 'Property_type.name',
    'longitude'=>'Localization.longitude',
    'latitude'=>'Localization.latitude',
    'street' => 'Localization.street',
    'postalCode' => 'Localization.postal_code',
    'flatNumber' => 'Localization.flat_number',
    'streetNumber' => 'Localization.street_number',
    'district' => 'District.name',
    'city' => 'City.name',
    'id_localization',
    'userId'=>'Contact_information.id_user',
    'firstName'=>'first_name',
    'lastName'=>'last_name',
    'email',
    'phoneNumber'=>'phone_number',
    'priceId' => 'Price.id',
    'price',
    'areMediaIncluded' => 'are_media_included',
    'commission'
]);