<?php

class Localization implements Model{
    private string $id;
    private string $longitude;
    private string $latitude;
    private string $street;
    private string $flatNumber;
    private string $streetNumber;
    private string $district;
    private string $city;
    private string $postalCode;

    /**
     * Localization constructor.
     * @param string $id
     * @param string $longitude
     * @param string $latitude
     * @param string $street
     * @param string $flatNumber
     * @param string $streetNumber
     * @param string $district
     * @param string $city
     * @param string $postalCode
     */
    public function __construct(string $id,
                                string $longitude,
                                string $latitude,
                                string $street,
                                string $flatNumber,
                                string $streetNumber,
                                string $district,
                                string $city,
                                string $postalCode)
    {
        $this->id = $id;
        $this->longitude = $longitude;
        $this->latitude = $latitude;
        $this->street = $street;
        $this->flatNumber = $flatNumber;
        $this->streetNumber = $streetNumber;
        $this->district = $district;
        $this->city = $city;
        $this->postalCode = $postalCode;
    }


    public function toJSON(){
        return json_encode(get_object_vars($this),JSON_UNESCAPED_UNICODE);
    }
}