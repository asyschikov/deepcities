ALTER TABLE `route` ADD `mode` text DEFAULT 'walk' NOT NULL;--> statement-breakpoint
-- Existing routes: a ride if any leg is ridden (like inferRouteMode).
UPDATE `route` SET `mode` = 'bike' WHERE EXISTS (SELECT 1 FROM json_each(`route`.`legs`) WHERE json_extract(json_each.value, '$.mode') = 'bike');
