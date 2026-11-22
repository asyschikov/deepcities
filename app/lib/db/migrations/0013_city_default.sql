ALTER TABLE `collection` ADD `city_default` integer DEFAULT false NOT NULL;--> statement-breakpoint
-- Deep Amsterdam is Amsterdam's own map.
UPDATE `collection` SET `city_default` = 1 WHERE `slug` = 'sights';
