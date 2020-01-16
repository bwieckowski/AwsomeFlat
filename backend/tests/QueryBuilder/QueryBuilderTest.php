<?php
declare(strict_types=1);
use PHPUnit\Framework\TestCase;
require_once '../../src/Utils/QueryBuilder/QueryBuilder.php';

class QueryBuilderTest extends TestCase{

    public function testShouldReturnSELECTWithAllColumn():void {
        $queryBuilder = new QueryBuilder();
        $actual = $queryBuilder
            ->SELECT()
            ->addColumns(['*'])
            ->addTable('User')
            ->end();
        $expected = 'SELECT * FROM User;';
        $this->assertEquals($expected,$actual);
    }


    public function testShouldReturnSELECTQueryWithSpecificColumnAndAs():void {
        $queryBuilder = new QueryBuilder();
        $actual = $queryBuilder
            ->SELECT()
            ->addColumns(['id','Firstname' => 'name','surname'])
            ->addTable('User')
            ->end();
        $expected = 'SELECT id, name as Firstname, surname FROM User;';
        $this->assertEquals($expected,$actual);
    }

    public function testShouldReturnSELECTQueryWithSpecificColumn():void {
        $queryBuilder = new QueryBuilder();
        $actual = $queryBuilder
            ->SELECT()
            ->addColumns(['id','name','surname'])
            ->addTable('User')
            ->end();
        $expected = 'SELECT id, name, surname FROM User;';
        $this->assertEquals($expected,$actual);
    }

    public function testShouldReturnSELECTQueryWithSpecificColumnAndInnerJoin():void {
        $queryBuilder = new QueryBuilder();
        $actual = $queryBuilder
            ->SELECT()
            ->addColumns(['uid' => 'User.id', 'cid'=>'Contact.id'])
            ->addTable('User')
            ->innerJoin('Contact','id_user','id')
            ->end();
        $expected = 'SELECT User.id as uid, Contact.id as cid FROM User inner join Contact on User.id = Contact.id_user;';
        $this->assertEquals($expected,$actual);
    }

    public function testShouldReturnSELECTQueryWithSpecificColumnAndInnerJoinAndWhereStatement():void {
        $queryBuilder = new QueryBuilder();
        $actual = $queryBuilder
            ->SELECT()
            ->addColumns(['uid' => 'User.id', 'cid'=>'Contact.id'])
            ->addTable('User')
            ->innerJoin('Contact','id_user','id')
            ->between('uid',1,3)
            ->end();
        $expected = 'SELECT User.id as uid, Contact.id as cid FROM User inner join Contact on User.id = Contact.id_user WHERE uid BETWEEN 1 AND 3;';
        $this->assertEquals($expected,$actual);
    }


    public function testShouldReturnInsertInto():void {
        $queryBuilder = new QueryBuilder();
        $actual = $queryBuilder
            ->insert()
            ->addTable('User')
            ->addColumn('first_name')
            ->addColumn('last_name')
            ->addValue('Bartek')
            ->addValue('Kowalski123')
            ->end();
        $expected = "INSERT INTO `User`(first_name, last_name) VALUES('Bartek', 'Kowalski123');";
        $this->assertEquals($expected,$actual);
    }

    public function testShouldReturnInsertIntoWithSelect():void {
        $selectQueryBuilder = new QueryBuilder();
        $subquery = $selectQueryBuilder->select()
            ->addColumns(["id"])
            ->addTable("User")
            ->equals("id", 2)
            ->endSubQuery();

        $InsertQueryBuilder = new QueryBuilder();
        $actual = $InsertQueryBuilder
            ->insert()
            ->addTable('User')
            ->addColumn('first_name')
            ->addColumn('last_name')
            ->addValue('Bartek')
            ->addValue('Kowalski123')
            ->addSubQuery($subquery)
            ->end();
        $expected = "INSERT INTO `User`(first_name, last_name) VALUES('Bartek', 'Kowalski123', (SELECT id FROM 'User' WHERE id like '2'));";
        $this->assertEquals($expected,$actual);
    }

}