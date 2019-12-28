<?php

require_once 'SelectQueryBuilder.php';

class QueryBuilder{

    public function select(){
        $query = 'SELECT ';
        return new SelectQueryBuilder($query);
    }

}