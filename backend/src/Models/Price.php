<?php


class Price implements Model {
    private $id;
    private $price;
    private $areMediaIncluded;
    private $commission;

    /**
     * Price constructor.
     * @param string $id
     * @param float $price
     * @param bool $areMediaIncluded
     * @param float $commission
     */
    public function __construct(string $id,
                                float $price,
                                bool $areMediaIncluded,
                                float $commission)
    {
        $this->id = $id;
        $this->price = $price;
        $this->areMediaIncluded = $areMediaIncluded;
        $this->commission = $commission;
    }


    public function toJSON(): string {
        return json_encode($this->toArray(),JSON_UNESCAPED_UNICODE);
    }


    public function toArray(): array{
        return get_object_vars($this);
    }
}