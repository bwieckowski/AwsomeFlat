<?php

class PropertyType implements Model {

        private $id;
        private $name;
        private $enum;

    /**
     * PropertyType constructor.
     * @param $id
     * @param $name
     * @param $enum
     */
    public function __construct($id, $name, $enum)
    {
        $this->id = $id;
        $this->name = $name;
        $this->enum = $enum;
    }


    public function toJSON(): string {
        return json_encode($this->toArray(),JSON_UNESCAPED_UNICODE);
    }


    public function toArray(): array{
        return get_object_vars($this);
    }
}