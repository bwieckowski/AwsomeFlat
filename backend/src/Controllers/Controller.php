<?php

class Controller {

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