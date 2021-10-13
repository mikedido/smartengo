<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity()
 */
class User
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $content;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $email;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $username;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $password;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $role;

}