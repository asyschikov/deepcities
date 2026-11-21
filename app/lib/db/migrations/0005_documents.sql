CREATE TABLE `document` (
	`id` text PRIMARY KEY NOT NULL,
	`collection_id` text NOT NULL,
	`status` text DEFAULT 'published' NOT NULL,
	`revision` integer DEFAULT 1 NOT NULL,
	`title` text NOT NULL,
	`summary` text DEFAULT '' NOT NULL,
	`body` text DEFAULT '' NOT NULL,
	`photo_ids` text NOT NULL,
	`translations` text DEFAULT '{}' NOT NULL,
	`created_by` text,
	`updated_by` text,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	FOREIGN KEY (`collection_id`) REFERENCES `collection`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`created_by`) REFERENCES `profile`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`updated_by`) REFERENCES `profile`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `document_collection_idx` ON `document` (`collection_id`,`status`);--> statement-breakpoint
CREATE TABLE `document_attachment` (
	`document_id` text NOT NULL,
	`subject_type` text NOT NULL,
	`subject_id` text NOT NULL,
	`position` integer DEFAULT 0 NOT NULL,
	PRIMARY KEY(`document_id`, `subject_type`, `subject_id`),
	FOREIGN KEY (`document_id`) REFERENCES `document`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `document_attachment_subject_idx` ON `document_attachment` (`subject_type`,`subject_id`);--> statement-breakpoint
CREATE TABLE `document_revision` (
	`id` text PRIMARY KEY NOT NULL,
	`document_id` text NOT NULL,
	`revision` integer NOT NULL,
	`action` text NOT NULL,
	`draft` text NOT NULL,
	`note` text,
	`edited_by` text,
	`created_at` integer NOT NULL,
	FOREIGN KEY (`document_id`) REFERENCES `document`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`edited_by`) REFERENCES `profile`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `document_revision_doc_idx` ON `document_revision` (`document_id`,`revision`);