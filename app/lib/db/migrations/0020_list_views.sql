CREATE TABLE `collection_place` (
	`collection_id` text NOT NULL,
	`place_id` text NOT NULL,
	`added_at` integer NOT NULL,
	`added_by` text,
	PRIMARY KEY(`collection_id`, `place_id`),
	FOREIGN KEY (`collection_id`) REFERENCES `collection`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`place_id`) REFERENCES `place`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`added_by`) REFERENCES `profile`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `collection_place_place_idx` ON `collection_place` (`place_id`);--> statement-breakpoint
ALTER TABLE `proposal` ADD `list_id` text REFERENCES collection(id) ON DELETE SET NULL;