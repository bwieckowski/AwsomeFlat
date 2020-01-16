<?php

require_once 'IQueryBuilder.php';
class InsertQueryBuilder implements IQueryBuilder
{
    private $query;
    private $columnsCouter;
    private $valuesCounter;

    function __construct( string $query ){
        $this->query = $query;
        $this->columnsCouter = 0;
        $this->valuesCouter = 0;
    }

    public function addTable($tableName){
        $this->query = $this->query.'`'.$tableName.'`';
        return $this;
    }

    public function addColumn($columnName){
        if( !$this->columnsCouter )
         $this->query = $this->query.'('.$columnName;
        else
            $this->query = $this->query.', '.$columnName;
        $this->columnsCouter++;
        return $this;
    }

    public function addValue($valuenName){
        if( !$this->valuesCounter )
            $this->query = $this->query.") VALUES("."'$valuenName'";
        else
            $this->query = $this->query.", '".$valuenName."'";
        $this->valuesCounter++;
        return $this;
    }

    public function addVariable($valuenName){
        if( !$this->valuesCounter )
            $this->query = $this->query.') VALUES('.$valuenName;
        else
            $this->query = $this->query.", ".$valuenName;
        $this->valuesCounter++;
        return $this;
    }

    public function addSubQuery($subQuery){
        if( !$this->valuesCounter )
            $this->query = $this->query.") VALUES((".$subQuery.")";
        else
            $this->query = $this->query.", (".$subQuery.")";
        $this->valuesCounter++;
        return $this;
    }

    public function end()
    {
        $this->query = $this->query . ');';
        return $this->query;
    }
}


