ALTER TABLE `collection` ADD `fields` text DEFAULT '[]' NOT NULL;--> statement-breakpoint
ALTER TABLE `place` ADD `sub_neighbourhood` text;--> statement-breakpoint
ALTER TABLE `place` ADD `attributes` text DEFAULT '{}' NOT NULL;