ALTER TABLE `route` ADD `loop` integer DEFAULT false NOT NULL;--> statement-breakpoint
-- Existing routes: a loop if the last stop is the first place, or within ~150 m of it (like inferRouteLoop).
UPDATE `route` SET `loop` = 1 WHERE json_array_length(`stops`) >= 3 AND (
  (json_extract(`stops`, '$[0].placeId') IS NOT NULL AND json_extract(`stops`, '$[0].placeId') = json_extract(`stops`, '$[' || (json_array_length(`stops`) - 1) || '].placeId'))
  OR ((json_extract(`stops`, '$[0].lat') - json_extract(`stops`, '$[' || (json_array_length(`stops`) - 1) || '].lat')) * 111320) * ((json_extract(`stops`, '$[0].lat') - json_extract(`stops`, '$[' || (json_array_length(`stops`) - 1) || '].lat')) * 111320)
   + ((json_extract(`stops`, '$[0].lng') - json_extract(`stops`, '$[' || (json_array_length(`stops`) - 1) || '].lng')) * 68000) * ((json_extract(`stops`, '$[0].lng') - json_extract(`stops`, '$[' || (json_array_length(`stops`) - 1) || '].lng')) * 68000) <= 22500
);
