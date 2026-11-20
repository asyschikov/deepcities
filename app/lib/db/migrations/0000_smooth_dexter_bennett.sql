CREATE TABLE `collection` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`title` text NOT NULL,
	`tagline` text,
	`description` text,
	`city` text NOT NULL,
	`center_lat` real NOT NULL,
	`center_lng` real NOT NULL,
	`zoom` real DEFAULT 13 NOT NULL,
	`categories` text NOT NULL,
	`contribution_policy` text DEFAULT 'open' NOT NULL,
	`created_by` text,
	`created_at` integer NOT NULL,
	FOREIGN KEY (`created_by`) REFERENCES `profile`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE UNIQUE INDEX `collection_slug_unique` ON `collection` (`slug`);--> statement-breakpoint
CREATE TABLE `collection_member` (
	`collection_id` text NOT NULL,
	`profile_id` text NOT NULL,
	`role` text NOT NULL,
	`assigned_by` text,
	`created_at` integer NOT NULL,
	PRIMARY KEY(`collection_id`, `profile_id`),
	FOREIGN KEY (`collection_id`) REFERENCES `collection`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`profile_id`) REFERENCES `profile`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`assigned_by`) REFERENCES `profile`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE TABLE `login_token` (
	`token_hash` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`next` text DEFAULT '/' NOT NULL,
	`expires_at` integer NOT NULL,
	`used_at` integer,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `login_token_email_idx` ON `login_token` (`email`,`created_at`);--> statement-breakpoint
CREATE TABLE `photo` (
	`id` text PRIMARY KEY NOT NULL,
	`collection_id` text NOT NULL,
	`object_key` text NOT NULL,
	`width` integer NOT NULL,
	`height` integer NOT NULL,
	`uploaded_by` text,
	`created_at` integer NOT NULL,
	FOREIGN KEY (`collection_id`) REFERENCES `collection`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`uploaded_by`) REFERENCES `profile`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE TABLE `place` (
	`id` text PRIMARY KEY NOT NULL,
	`collection_id` text NOT NULL,
	`status` text DEFAULT 'published' NOT NULL,
	`revision` integer DEFAULT 1 NOT NULL,
	`title` text NOT NULL,
	`summary` text NOT NULL,
	`body` text DEFAULT '' NOT NULL,
	`category` text NOT NULL,
	`lat` real NOT NULL,
	`lng` real NOT NULL,
	`address` text,
	`links` text NOT NULL,
	`photo_ids` text NOT NULL,
	`created_by` text,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	FOREIGN KEY (`collection_id`) REFERENCES `collection`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`created_by`) REFERENCES `profile`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `place_collection_idx` ON `place` (`collection_id`,`status`);--> statement-breakpoint
CREATE TABLE `profile` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`name` text NOT NULL,
	`bio` text,
	`role` text DEFAULT 'user' NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `profile_email_idx` ON `profile` (`email`);--> statement-breakpoint
CREATE TABLE `proposal` (
	`id` text PRIMARY KEY NOT NULL,
	`collection_id` text NOT NULL,
	`place_id` text,
	`kind` text NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`draft` text,
	`note` text,
	`base_revision` integer,
	`proposed_by` text,
	`reviewed_by` text,
	`review_note` text,
	`created_at` integer NOT NULL,
	`reviewed_at` integer,
	FOREIGN KEY (`collection_id`) REFERENCES `collection`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`place_id`) REFERENCES `place`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`proposed_by`) REFERENCES `profile`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`reviewed_by`) REFERENCES `profile`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `proposal_queue_idx` ON `proposal` (`collection_id`,`status`,`created_at`);--> statement-breakpoint
CREATE INDEX `proposal_place_idx` ON `proposal` (`place_id`,`status`);--> statement-breakpoint
CREATE INDEX `proposal_author_idx` ON `proposal` (`proposed_by`,`created_at`);--> statement-breakpoint
CREATE TABLE `rating` (
	`place_id` text NOT NULL,
	`profile_id` text NOT NULL,
	`score` integer NOT NULL,
	`created_at` integer NOT NULL,
	PRIMARY KEY(`place_id`, `profile_id`),
	FOREIGN KEY (`place_id`) REFERENCES `place`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`profile_id`) REFERENCES `profile`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `session` (
	`id_hash` text PRIMARY KEY NOT NULL,
	`profile_id` text NOT NULL,
	`expires_at` integer NOT NULL,
	`created_at` integer NOT NULL,
	FOREIGN KEY (`profile_id`) REFERENCES `profile`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `session_profile_idx` ON `session` (`profile_id`);