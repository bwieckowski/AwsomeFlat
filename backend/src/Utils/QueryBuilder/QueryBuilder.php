<?php

require_once 'SelectQueryBuilder.php';
require_once 'InsertQueryBuilder.php';
require_once 'DeleteQueryBuilder.php';

class QueryBuilder{

    public function select(){
        $query = 'SELECT ';
        return new SelectQueryBuilder($query);
    }

    public function insert(){
        $query = 'INSERT'.' '.'INTO ';
        return new InsertQueryBuilder($query);
    }


    public function delete() {
        $query = 'Delete'.' '.'From ';
        return new DeleteQueryBuilder($query);
    }

}