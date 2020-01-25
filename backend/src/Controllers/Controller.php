<?php

class Controller {

    protected function parametersHasAllKeys($parameters, $keys){
        foreach ($keys as $key){
            if(!isset($parameters[$key])){
                throw new Response("Niewłaściwe parametry", 401);
            }
        }
    }

    protected function parametersHasOneOrMoreKey($parameters, $keys){
        foreach ($keys as $key){
            if(isset($parameters[$key])){
               return;
            }
        }
        throw new Response("Niewłaściwe parametry", 401);
    }

    protected function renderArray($array) {
        $result = [];
        if($array != null) {
            foreach ($array as $item) {
                $result[] = $item->toArray();
            }
            echo json_encode($result, JSON_UNESCAPED_UNICODE);
        }
        else
            $this->renderObject('[]');
    }

    protected function renderObject($objext) {
        echo $objext;
    }
}