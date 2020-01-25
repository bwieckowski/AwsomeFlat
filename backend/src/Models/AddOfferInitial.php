<?php
require_once "Model.php";
require_once "PropertyType.php";
require_once "Facility.php";
require_once "User.php";

class AddOfferInitial implements Model {

    private  $types;
    private $facilities;
    private $user;

    /**
     * Facility constructor.
     * @param array $propertyTypes
     * @param array $facilities
     * @param BasicUser $user
     */

    public function __construct( array $propertyTypes, array $facilities, BasicUser $user)
    {
        $this->types = $propertyTypes;
        $this->facilities = $facilities;
        $this->user = $user;
    }

    public function toJSON(): string{
        return json_encode($this->toArray(), JSON_UNESCAPED_UNICODE);
    }

    public function toArray(): array{
        $addOfferInitial = get_object_vars($this);

        $results = [];
        foreach ( $this->facilities as $facility) {
            $results[] = $facility->toArray();

        }

        $addOfferInitial['facilities'] = $results;
        $results = [];

        foreach ( $this->types as $type) {
            $results[] = $type->toArray();
        }
        $addOfferInitial['types'] = $results;

        $this->user->unsetPassword();
        $addOfferInitial['user'] = $this->user->toArray();

        return $addOfferInitial;
    }
}