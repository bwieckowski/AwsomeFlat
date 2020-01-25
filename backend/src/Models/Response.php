<?php

require_once 'Model.php';

class Response extends Exception implements Model {

    /**
     * Error constructor.
     * @param $message
     * @param $code
     */
    public function __construct(string $message, string $code = '61')
    {
        parent::__construct($message, $code);
    }

    public function getEmptyObject(){
        return new stdClass();
    }

    public function getEmptyArray(){
        return array();
    }

    public function toJSON(): string{
        return json_encode($this->toArray(),JSON_UNESCAPED_UNICODE);
    }

    public function toArray(): array{
        unset($this -> file);
        unset($this -> line);
        if( $this->code !== 200)
            http_response_code(404);
        else
            http_response_code($this->code);
        return get_object_vars($this);
    }
}