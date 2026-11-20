CREATE TABLE `route` (
	`id` text PRIMARY KEY NOT NULL,
	`collection_id` text NOT NULL,
	`status` text DEFAULT 'published' NOT NULL,
	`revision` integer DEFAULT 1 NOT NULL,
	`title` text NOT NULL,
	`summary` text NOT NULL,
	`body` text DEFAULT '' NOT NULL,
	`stops` text NOT NULL,
	`legs` text NOT NULL,
	`photo_ids` text NOT NULL,
	`created_by` text,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	FOREIGN KEY (`collection_id`) REFERENCES `collection`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`created_by`) REFERENCES `profile`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `route_collection_idx` ON `route` (`collection_id`,`status`);--> statement-breakpoint
ALTER TABLE `proposal` ADD `subject` text DEFAULT 'place' NOT NULL;--> statement-breakpoint
ALTER TABLE `proposal` ADD `route_id` text REFERENCES route(id) ON DELETE cascade;--> statement-breakpoint
ALTER TABLE `proposal` ADD `route_draft` text;--> statement-breakpoint
CREATE INDEX `proposal_route_idx` ON `proposal` (`route_id`,`status`);