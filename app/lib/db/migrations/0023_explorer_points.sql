CREATE TABLE `score_event` (
	`id` text PRIMARY KEY NOT NULL,
	`profile_id` text NOT NULL,
	`collection_id` text NOT NULL,
	`city` text NOT NULL,
	`place_id` text,
	`kind` text NOT NULL,
	`points` integer NOT NULL,
	`key` text NOT NULL,
	`source_id` text,
	`created_at` integer NOT NULL,
	FOREIGN KEY (`profile_id`) REFERENCES `profile`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`collection_id`) REFERENCES `collection`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`place_id`) REFERENCES `place`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE UNIQUE INDEX `score_event_key_idx` ON `score_event` (`profile_id`,`key`);--> statement-breakpoint
CREATE INDEX `score_event_city_idx` ON `score_event` (`city`,`profile_id`);--> statement-breakpoint
CREATE INDEX `score_event_source_idx` ON `score_event` (`source_id`);--> statement-breakpoint
ALTER TABLE `checkin_photo` ADD `is_private` integer DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE `gone_report` ADD `kind` text DEFAULT 'gone' NOT NULL;--> statement-breakpoint
ALTER TABLE `profile` ADD `is_public` integer DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE `profile` ADD `public_asked_at` integer;--> statement-breakpoint
-- Selfies taken so far were promised to stay private.
UPDATE `checkin_photo` SET `is_private` = 1 WHERE `kind` = 'selfie';
