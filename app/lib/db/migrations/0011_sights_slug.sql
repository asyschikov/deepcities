-- Deep Amsterdam moves to deepcities.org/amsterdam/sights. One way: the old
-- slugs (amsterdam-c-list, c-list, deep) no longer resolve.
UPDATE `collection` SET `slug` = 'sights' WHERE `slug` = 'deep';
