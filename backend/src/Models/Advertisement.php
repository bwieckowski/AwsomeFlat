<?php
require_once 'BasicAdvertisement.php';
require_once 'User.php';
require_once 'PropertyType.php';

class Advertisement extends BasicAdvertisement
{

    private $user;
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
                                float $area,
                                PropertyType $type,
                                BasicUser $user,
                                array $facilities,
                                array $images,
                                string $addedTime)
    {
        parent::__construct(
            $id,
            $title,
            $localization,
            $price,
            $area,
            $type,
        );
        $this->user = $user;
        $this->facilities = $facilities;
        $this->images = $images;
        $this->addedTime = $addedTime;
    }

    public function toJSON(): string {
        $advertisement = $this->toArray();
        return json_encode( $advertisement,JSON_UNESCAPED_UNICODE);
    }

    public function toArray(): array{
        $advertisement = parent::toArray();

        $results = [];
        foreach ( $this->facilities as $facility) {
            $results[] = $facility->toArray();
        }
        $advertisement['facilities'] = $results;

        return $advertisement;
    }
}