<?php

require_once 'IQueryBuilder.php';
class DeleteQueryBuilder implements IQueryBuilder
{
    private $query;
    private $columnsCouter;
    private $whereCounter;

    function __construct( string $query ){
        $this->query = $query;
        $this->columnsCouter = 0;
        $this->whereCounter = 0;
    }

    public function addTable($tableName){
        $this->query = $this->query.'`'.$tableName.'`';
        return $this;
    }


    public function where(){
        $this->query = $this->query.' WHERE ';
        return $this;
    }

    private function whereOrAnd(){
        if($this->whereCounter)
            $this->and();
        else
            $this->where();
    }


    public function equals($columnName, $mappedValue){
        if($columnName === null or $mappedValue === null)
            return $this;

        $this->whereOrAnd();

        $this->query = $this->query.$columnName." like '".$mappedValue."'";
        $this->whereCounter++;
        return $this;
    }

    public function and(){
        $this->query = $this->query.' AND ';
        return $this;
    }

    public function end()
    {
        $this->query = $this->query . ';';
        return $this->query;
    }
}


