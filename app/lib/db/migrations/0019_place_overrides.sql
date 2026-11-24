CREATE TABLE `place_override` (
	`collection_id` text NOT NULL,
	`place_id` text NOT NULL,
	`attributes` text DEFAULT '{}' NOT NULL,
	`category` text,
	`updated_at` integer NOT NULL,
	`updated_by` text,
	PRIMARY KEY(`collection_id`, `place_id`),
	FOREIGN KEY (`collection_id`) REFERENCES `collection`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`place_id`) REFERENCES `place`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`updated_by`) REFERENCES `profile`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `place_override_place_idx` ON `place_override` (`place_id`);--> statement-breakpoint
ALTER TABLE `proposal` ADD `override_draft` text;