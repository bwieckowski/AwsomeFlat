<?php
require_once "Model.php";

class Facility implements Model{

    private $name;
    private $id;

    /**
     * Facility constructor.
     * @param $name
     * @param $id
     */
    public function __construct($id, $name)
    {
        $this->name = $name;
        $this->id = $id;
    }

    public function toJSON(): string{
        return json_encode(get_object_vars($this), JSON_UNESCAPED_UNICODE);
    }

    public function toArray(): array{
        return get_object_vars($this);
    }
}