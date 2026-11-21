-- Maps now live under their city (deepcities.org/amsterdam/c-list); the old
-- slug stays accepted through LEGACY_MAP_SLUGS (app/lib/cities.ts).
UPDATE `collection` SET `slug` = 'c-list' WHERE `slug` = 'amsterdam-c-list';
