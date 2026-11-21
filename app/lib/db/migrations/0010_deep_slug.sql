-- The C-list map is now "Deep Amsterdam" (deepcities.org/amsterdam/deep); the old
-- slugs stay accepted through LEGACY_MAP_SLUGS (app/lib/cities.ts).
UPDATE `collection` SET `slug` = 'deep' WHERE `slug` = 'c-list';
