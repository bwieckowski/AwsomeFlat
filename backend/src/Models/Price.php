<?php


class Price implements Model {
    private string $id;
    private float $price;
    private bool $areMediaIncluded;
    private float $commission;

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


    public function toJSON(){
        return json_encode(get_object_vars($this),JSON_UNESCAPED_UNICODE);
    }
}