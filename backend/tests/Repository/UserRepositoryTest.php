<?php

use PHPUnit\Framework\TestCase;

require_once __DIR__ . '/../../src/Utils/QueryBuilder/QueryBuilder.php';

class UserRepositoryTest extends TestCase{

    public function testQueryById(){
        $qb = new QueryBuilder();

        $actualQuery = $qb
            ->select()
            ->addColumns(['*'])
            ->addTable('Contact_information')
            ->innerJoin('User','id','id_user')
            ->where()
            ->equals('User.id',':id')
            ->end();

        $expectedQuery = 'SELECT * FROM Contact_information inner join User on Contact_information.id_user = User.id WHERE User.id = :id;';

        $this->assertEquals($expectedQuery,$actualQuery);
    }
}