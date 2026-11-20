ALTER TABLE `collection` ADD `language` text DEFAULT 'en' NOT NULL;--> statement-breakpoint
ALTER TABLE `collection` ADD `languages` text DEFAULT '[]' NOT NULL;--> statement-breakpoint
ALTER TABLE `collection` ADD `translations` text DEFAULT '{}' NOT NULL;--> statement-breakpoint
ALTER TABLE `place` ADD `translations` text DEFAULT '{}' NOT NULL;--> statement-breakpoint
ALTER TABLE `route` ADD `translations` text DEFAULT '{}' NOT NULL;