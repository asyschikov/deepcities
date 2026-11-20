CREATE TABLE `api_token` (
	`id_hash` text PRIMARY KEY NOT NULL,
	`public_id` text NOT NULL,
	`profile_id` text NOT NULL,
	`name` text NOT NULL,
	`last_used_at` integer,
	`created_at` integer NOT NULL,
	FOREIGN KEY (`profile_id`) REFERENCES `profile`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `api_token_public_idx` ON `api_token` (`public_id`);--> statement-breakpoint
CREATE INDEX `api_token_profile_idx` ON `api_token` (`profile_id`);--> statement-breakpoint
ALTER TABLE `photo` ADD `credit` text;--> statement-breakpoint
ALTER TABLE `photo` ADD `license` text;--> statement-breakpoint
ALTER TABLE `photo` ADD `source_url` text;--> statement-breakpoint
ALTER TABLE `place` ADD `municipality` text;--> statement-breakpoint
ALTER TABLE `place` ADD `borough` text;--> statement-breakpoint
ALTER TABLE `place` ADD `neighbourhood` text;