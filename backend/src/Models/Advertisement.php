<?php
require_once 'User.php';
require_once 'Localization.php';
require_once 'Price.php';

class Advertisement implements Model
{
    private $id;
    private $title;
    private $localization;
    private $price;
    private $user;
    private $area;
    private $type;
    private $facilities;
    private $images;
    private $addedTime;

    /**
     * Advertisement constructor.
     * @param string $id
     * @param string $title
     * @param Localization $localization
     * @param Price $price
     * @param User $user
     * @param float $area
     * @param string $type
     * @param array $facilities
     * @param array $images
     * @param string $addedTime
     */
    public function __construct(string $id,
                                string $title,
                                Localization $localization,
                                Price $price,
                                User $user,
                                float $area,
                                string $type,
                                array $facilities,
                                array $images,
                                string $addedTime)
    {
        $this->id = $id;
        $this->title = $title;
        $this->localization = $localization;
        $this->price = $price;
        $this->user = $user;
        $this->area = $area;
        $this->type = $type;
        $this->facilities = $facilities;
        $this->images = $images;
        $this->addedTime = $addedTime;
    }

    public function toJSON(): string {
        $advertisement = $this->toArray();
        return json_encode( $advertisement,JSON_UNESCAPED_UNICODE);
    }

    public function toArray(): array{
        $advertisement = get_object_vars($this);
        $advertisement['localization'] = $this->localization->toArray();
        $advertisement['user'] = $this->user->toArray();
        $advertisement['price'] = $this->price->toArray();
        return $advertisement;
    }
}