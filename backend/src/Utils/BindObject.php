<?php


class BindObject{
    private $parameter;
    private $variable;
    private $data_type;

    /**
     * BindObject constructor.
     * @param string $parameter
     * @param string $variable
     * @param int $data_type
     */
    public function __construct(string $parameter, string $variable, int $data_type)
    {
        $this->parameter = $parameter;
        $this->variable = $variable;
        $this->data_type = $data_type;
    }

    /**
     * @return string
     */
    public function getParameter(): string
    {
        return $this->parameter;
    }

    /**
     * @return string
     */
    public function getVariable(): string
    {
        return $this->variable;
    }

    /**
     * @return int
     */
    public function getDataType(): int
    {
        return $this->data_type;
    }
}