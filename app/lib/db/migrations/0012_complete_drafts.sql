-- Every stored draft has every field: no defaults filled in when reading.
-- Route drafts from before routes had a main mode or loop flag get them by
-- the same rules as a new draft (inferRouteMode / inferRouteLoop).
UPDATE `proposal` SET `route_draft` = json_set(`route_draft`, '$.mode',
  CASE WHEN EXISTS (SELECT 1 FROM json_each(`proposal`.`route_draft`, '$.legs') l WHERE json_extract(l.value, '$.mode') = 'bike') THEN 'bike' ELSE 'walk' END)
WHERE `route_draft` IS NOT NULL AND json_type(`route_draft`, '$.mode') IS NULL;
--> statement-breakpoint
UPDATE `proposal` SET `route_draft` = json_set(`route_draft`, '$.loop', json(CASE WHEN
  json_array_length(`route_draft`, '$.stops') >= 3 AND (
    (json_extract(`route_draft`, '$.stops[0].placeId') IS NOT NULL AND json_extract(`route_draft`, '$.stops[0].placeId') = json_extract(`route_draft`, '$.stops[#-1].placeId'))
    OR ((json_extract(`route_draft`, '$.stops[0].lat') - json_extract(`route_draft`, '$.stops[#-1].lat')) * 111320) * ((json_extract(`route_draft`, '$.stops[0].lat') - json_extract(`route_draft`, '$.stops[#-1].lat')) * 111320)
     + ((json_extract(`route_draft`, '$.stops[0].lng') - json_extract(`route_draft`, '$.stops[#-1].lng')) * 68000) * ((json_extract(`route_draft`, '$.stops[0].lng') - json_extract(`route_draft`, '$.stops[#-1].lng')) * 68000) <= 22500
  ) THEN 'true' ELSE 'false' END))
WHERE `route_draft` IS NOT NULL AND json_type(`route_draft`, '$.loop') IS NULL;
--> statement-breakpoint
-- Place drafts from before the sub-neighbourhood field.
UPDATE `proposal` SET `draft` = json_set(`draft`, '$.subNeighbourhood', json('null'))
WHERE `draft` IS NOT NULL AND json_type(`draft`, '$.subNeighbourhood') IS NULL;
