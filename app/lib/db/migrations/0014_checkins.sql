CREATE TABLE `checkin` (
	`id` text PRIMARY KEY NOT NULL,
	`collection_id` text NOT NULL,
	`place_id` text NOT NULL,
	`profile_id` text NOT NULL,
	`route_id` text,
	`lat` real,
	`lng` real,
	`accuracy` real,
	`created_at` integer NOT NULL,
	FOREIGN KEY (`collection_id`) REFERENCES `collection`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`place_id`) REFERENCES `place`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`profile_id`) REFERENCES `profile`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`route_id`) REFERENCES `route`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `checkin_profile_idx` ON `checkin` (`profile_id`,`created_at`);--> statement-breakpoint
CREATE INDEX `checkin_place_idx` ON `checkin` (`place_id`,`profile_id`);--> statement-breakpoint
CREATE TABLE `checkin_photo` (
	`id` text PRIMARY KEY NOT NULL,
	`checkin_id` text NOT NULL,
	`profile_id` text NOT NULL,
	`kind` text NOT NULL,
	`object_key` text NOT NULL,
	`width` integer NOT NULL,
	`height` integer NOT NULL,
	`photo_id` text,
	`created_at` integer NOT NULL,
	FOREIGN KEY (`checkin_id`) REFERENCES `checkin`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`profile_id`) REFERENCES `profile`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`photo_id`) REFERENCES `photo`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `checkin_photo_checkin_idx` ON `checkin_photo` (`checkin_id`);--> statement-breakpoint
CREATE TABLE `verdict` (
	`place_id` text NOT NULL,
	`profile_id` text NOT NULL,
	`verdict` text NOT NULL,
	`updated_at` integer NOT NULL,
	PRIMARY KEY(`place_id`, `profile_id`),
	FOREIGN KEY (`place_id`) REFERENCES `place`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`profile_id`) REFERENCES `profile`(`id`) ON UPDATE no action ON DELETE cascade
);
