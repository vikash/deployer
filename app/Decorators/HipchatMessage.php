<?php

namespace REBELinBLUE\Deployer\Decorators;

use REBELinBLUE\Deployer\Decorators\Contracts\ChatMessageInterface;
use REBELinBLUE\Deployer\Message;
use REBELinBLUE\Deployer\Notification;

class HipchatMessage implements ChatMessageInterface
{
    private $message;
    private $notification;

    public function __construct(Notification $notification, Message $message)
    {
        $this->message      = $message;
        $this->notification = $notification;
    }

    public function getPayload()
    {
        $payload = [
            'message'        => $this->message->getMessage(),
            'message_format' => 'html',
        ];

        return $payload;
    }
}