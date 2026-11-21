CREATE TABLE `area` (
	`id` text PRIMARY KEY NOT NULL,
	`city` text NOT NULL,
	`level` text NOT NULL,
	`code` text NOT NULL,
	`name` text NOT NULL,
	`parent_id` text,
	`geometry` text,
	`bbox` text,
	`source` text,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `area_city_level_code_idx` ON `area` (`city`,`level`,`code`);--> statement-breakpoint
CREATE INDEX `area_parent_idx` ON `area` (`parent_id`);