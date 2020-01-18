<?php


class Filter implements Model{
    private $city;
    private $districts;
    private $facilities;
    private $types;

    /**
     * Filter constructor.
     * @param $city
     * @param $types
     * @param array $districts
     * @param array $facilities
     */
    public function __construct($city, $types, $districts = [], $facilities = [])
    {
        $this->city = $city;
        $this->types = $types;
        $this->districts = $districts;
        $this->facilities = $facilities;
    }


    public function toJSON(): string {
        return json_encode($this->toArray(),JSON_UNESCAPED_UNICODE);
    }

    public function toArray(): array{
        $filter = get_object_vars($this);

        $results = [];
        foreach ( $this->facilities as $facility) {
            $results[] = $facility->toArray();
        }
        $filter['facilities'] = $results;

        $results = [];
        foreach ( $this->districts as $district) {
            $results[] = $district->toArray();
        }
        $filter['districts'] = $results;

        $results = [];
        foreach ( $this->types as $type) {
            $results[] = $type->toArray();
        }
        $filter['types'] = $results;
        return $filter;

    }
}