CREATE TABLE `gone_report` (
	`place_id` text NOT NULL,
	`profile_id` text NOT NULL,
	`collection_id` text NOT NULL,
	`note` text,
	`lat` real,
	`lng` real,
	`accuracy` real,
	`created_at` integer NOT NULL,
	PRIMARY KEY(`place_id`, `profile_id`),
	FOREIGN KEY (`place_id`) REFERENCES `place`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`profile_id`) REFERENCES `profile`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`collection_id`) REFERENCES `collection`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `gone_report_collection_idx` ON `gone_report` (`collection_id`);