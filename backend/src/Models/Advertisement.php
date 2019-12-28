<?php
require_once 'User.php';
require_once 'Localization.php';
require_once 'Price.php';

class Advertisement implements Model
{
    private string $id;
    private string $title;
    private Localization $localization;
    private Price $price;
    private User $user;
    private float $area;
    private string $type;
    private Array $facilities;
    private Array $images;
    private string $addedTime;

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

    public function toJSON(){
        return json_encode(get_object_vars($this),JSON_UNESCAPED_UNICODE);
    }
}