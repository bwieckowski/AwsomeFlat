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

}