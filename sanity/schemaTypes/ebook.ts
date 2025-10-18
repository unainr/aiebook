import { BookAIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const eBook = defineType({
	name: "eBook",
	title: "E-Book",
	type: "document",
	icon: BookAIcon,
	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "Book Title",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "slug",
			type: "slug",
			title: "Slug",
			options: {
				source: "title",
			},
		}),
		defineField({
			name: "description",
			type: "markdown",
			title: "Short Description",
		}),
		defineField({
			name: "images",
			type: "array",
			title: "Book Cover",
			of: [{ type: "image" }],
		}),
		defineField({
			name: "chapters",
			type: "string",
			title: "Numbers of Chapters",
		}),
		defineField({
			name: "userId",
			title: "User ID",
			type: "string",
			description: "The authenticated user who created this eBook",
		}),
		defineField({
			name: "isPublic",
			title: "Publicly Available?",
			type: "boolean",
			initialValue: false,
		}),
		defineField({
			name: "createdAt",
			title: "Created At",
			type: "datetime",
			initialValue: () => new Date().toISOString(),
		}),
	],
});
