ALTER TABLE `collection` ADD `view` text;--> statement-breakpoint
ALTER TABLE `place` ADD `parent_id` text REFERENCES place(id) ON DELETE SET NULL;--> statement-breakpoint
ALTER TABLE `place` ADD `detail` text DEFAULT 'city' NOT NULL;--> statement-breakpoint
CREATE INDEX `place_parent_idx` ON `place` (`parent_id`);--> statement-breakpoint
-- Every stored draft has every field: place drafts get no parent, city detail.
UPDATE `proposal` SET `draft` = json_set(`draft`, '$.parentId', json('null'))
WHERE `draft` IS NOT NULL AND json_type(`draft`, '$.parentId') IS NULL;--> statement-breakpoint
UPDATE `proposal` SET `draft` = json_set(`draft`, '$.detail', 'city')
WHERE `draft` IS NOT NULL AND json_type(`draft`, '$.detail') IS NULL;
