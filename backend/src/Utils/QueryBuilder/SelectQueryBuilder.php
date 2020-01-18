<?php

require_once 'IQueryBuilder.php';

class SelectQueryBuilder implements IQueryBuilder
{
    private $query;
    private $table;
    private $whereCounter;

    function __construct( string $query ){
        $this->query = $query;
        $this->table = null;
        $this->whereCounter = 0;
    }

    public function addColumns(array $fieldsName){
        $originalNames = array_values($fieldsName);
        $newNames = array_keys($fieldsName);

        for($i = 0; $i < sizeof($originalNames); $i++){
            if(!is_numeric($newNames[$i])){
                $this->query = $this->query.$originalNames[$i].' as '.$newNames[$i].', ';
            } else {
                $this->query = $this->query.$originalNames[$i].', ';
            }
        }
        $this->query=substr($this->query, 0 , -2);
        return $this;

    }

    public function addTable( string $table ){
        $this->table = $table;
        $this->query = $this->query.' FROM '.$table;
        return $this;
    }

    public function innerJoin($connectingTable, $connectingTableId, $originalTableId, $originalTable = null){
        if($this->table === null)
            throw new Response('you must connecting table first - use addTable method');

        if( $originalTable === null)
            $originalTable = $this->table;

        $this->query = $this->query.' inner join '.$connectingTable.' on '.$originalTable.'.'.$originalTableId.' = '.$connectingTable.'.'.$connectingTableId;
        return $this;
    }

    public function where(){
        $this->query = $this->query.' WHERE ';
        return $this;
    }

    public function equals($columnName, $mappedValue){
        if($columnName === null or $mappedValue === null)
            return $this;

        $this->whereOrAnd();

        $this->query = $this->query.$columnName." like '".$mappedValue."'";
        $this->whereCounter++;
        return $this;
    }


    public function groupBy($field){
        if($field === null )
            return $this;

        $this->query = $this->query." group by $field ";
        return $this;
    }


    public function moreThan($columnName, $mappedValue){
        if($columnName === null or $mappedValue === null)
            return $this;

        $this->whereOrAnd();

        $this->query = $this->query.$mappedValue.' < '.$columnName;
        $this->whereCounter++;
        return $this;
    }


    public function lessThan($columnName, $mappedValue){
        if($columnName === null or $mappedValue === null)
            return $this;

        $this->whereOrAnd();

        $this->query = $this->query.$mappedValue.' > '.$columnName;
        $this->whereCounter++;
        return $this;
    }

    public function between($columnName, $mappedValue1, $mappedValue2){
        if($mappedValue2 === null or $mappedValue1 === null)
            return $this;

        $this->whereOrAnd();

        $this->query = $this->query.$columnName.' BETWEEN '.$mappedValue1.' AND '.$mappedValue2;
        $this->whereCounter++;
        return $this;
    }

    private function whereOrAnd(){
        if($this->whereCounter)
            $this->and();
        else
            $this->where();
    }

    public function and(){
        $this->query = $this->query.' AND ';
        return $this;
    }

    public function or(){
        $this->query = $this->query.' OR ';
        return $this;
    }

    public function end(){
        $this->query = $this->query . ';';
        return $this->query;
    }

    public function endSubQuery(){
        return $this->query;
    }
}