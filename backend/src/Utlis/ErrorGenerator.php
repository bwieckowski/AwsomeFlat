<?php

class ErrorGenerator{
    public static function generateError( $message, $code){
        $error = new stdClass();
        $error->message = $message;
        $error->code = $code;
        return $error;
    }
}