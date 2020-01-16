<?php

require_once 'SelectQueryBuilder.php';
require_once 'InsertQueryBuilder.php';

class QueryBuilder{

    public function select(){
        $query = 'SELECT ';
        return new SelectQueryBuilder($query);
    }

    public function insert(){
        $query = 'INSERT'.' '.'INTO ';
        return new InsertQueryBuilder($query);
    }

}