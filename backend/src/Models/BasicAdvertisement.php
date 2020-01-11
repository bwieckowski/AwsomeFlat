<?php
require_once 'Model.php';
require_once 'Localization.php';
require_once 'Price.php';

class BasicAdvertisement implements Model {

    protected $id;
    protected $title;
    protected $localization;
    protected $price;
    protected $area;
    protected $type;

    public function __construct(
        string $id,
        string $title,
        Localization $localization,
        Price $price,
        float $area,
        string $type
    )
    {
        $this->id = $id;
        $this->title = $title;
        $this->localization = $localization;
        $this->price = $price;
        $this->area = $area;
        $this->type = $type;

    }
    public function toJSON(): string {
        $advertisement = $this->toArray();
        return json_encode( $advertisement,JSON_UNESCAPED_UNICODE);
    }

    public function toArray(): array{
        $advertisement = get_object_vars($this);
        $advertisement['localization'] = $this->localization->toArray();
        $advertisement['price'] = $this->price->toArray();

        return $advertisement;
    }
}