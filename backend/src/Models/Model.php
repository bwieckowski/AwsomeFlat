<?php


interface Model {
    public function toJSON(): string;
    public function toArray(): array;
}