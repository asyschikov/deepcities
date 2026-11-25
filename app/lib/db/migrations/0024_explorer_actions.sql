CREATE TABLE `explorer_action` (
	`id` text PRIMARY KEY NOT NULL,
	`profile_id` text NOT NULL,
	`collection_id` text NOT NULL,
	`city` text NOT NULL,
	`place_id` text,
	`action` text NOT NULL,
	`detail` text DEFAULT '{}' NOT NULL,
	`source_id` text,
	`revoked_at` integer,
	`created_at` integer NOT NULL,
	FOREIGN KEY (`profile_id`) REFERENCES `profile`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`collection_id`) REFERENCES `collection`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`place_id`) REFERENCES `place`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `explorer_action_profile_idx` ON `explorer_action` (`profile_id`,`created_at`);--> statement-breakpoint
CREATE INDEX `explorer_action_place_idx` ON `explorer_action` (`place_id`);--> statement-breakpoint
CREATE INDEX `explorer_action_source_idx` ON `explorer_action` (`source_id`);--> statement-breakpoint
-- Backfill: every check-in, visit photo, verdict and report so far.
INSERT INTO `explorer_action` (`id`, `profile_id`, `collection_id`, `city`, `place_id`, `action`, `detail`, `source_id`, `created_at`)
SELECT lower(hex(randomblob(12))), c.`profile_id`, c.`collection_id`, m.`city`, c.`place_id`, 'checkin',
  json_object('routeId', c.`route_id`, 'lat', c.`lat`, 'lng', c.`lng`, 'accuracy', c.`accuracy`, 'backfilled', 1),
  c.`id`, c.`created_at`
FROM `checkin` c JOIN `collection` m ON m.`id` = c.`collection_id`;
--> statement-breakpoint
INSERT INTO `explorer_action` (`id`, `profile_id`, `collection_id`, `city`, `place_id`, `action`, `detail`, `source_id`, `created_at`)
SELECT lower(hex(randomblob(12))), p.`profile_id`, c.`collection_id`, m.`city`, c.`place_id`, 'photo',
  json_object('kind', p.`kind`, 'isPrivate', p.`is_private`, 'offered', p.`photo_id` IS NOT NULL, 'photoId', p.`photo_id`, 'backfilled', 1),
  p.`id`, p.`created_at`
FROM `checkin_photo` p JOIN `checkin` c ON c.`id` = p.`checkin_id` JOIN `collection` m ON m.`id` = c.`collection_id`;
--> statement-breakpoint
INSERT INTO `explorer_action` (`id`, `profile_id`, `collection_id`, `city`, `place_id`, `action`, `detail`, `source_id`, `created_at`)
SELECT lower(hex(randomblob(12))), v.`profile_id`, pl.`collection_id`, m.`city`, v.`place_id`, 'verdict',
  json_object('verdict', v.`verdict`, 'backfilled', 1),
  NULL, v.`updated_at`
FROM `verdict` v JOIN `place` pl ON pl.`id` = v.`place_id` JOIN `collection` m ON m.`id` = pl.`collection_id`;
--> statement-breakpoint
INSERT INTO `explorer_action` (`id`, `profile_id`, `collection_id`, `city`, `place_id`, `action`, `detail`, `source_id`, `created_at`)
SELECT lower(hex(randomblob(12))), g.`profile_id`, g.`collection_id`, m.`city`, g.`place_id`, 'report',
  json_object('kind', g.`kind`, 'note', g.`note`, 'lat', g.`lat`, 'lng', g.`lng`, 'accuracy', g.`accuracy`, 'backfilled', 1),
  NULL, g.`created_at`
FROM `gone_report` g JOIN `collection` m ON m.`id` = g.`collection_id`;
