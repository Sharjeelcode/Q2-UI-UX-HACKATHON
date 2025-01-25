import { defineType, defineField } from "sanity";

export default defineType({
  name: "Blogs",
  type: "document",
  title: "Blogs",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Blog Title",
      validation: (Rule) => Rule.required().error("Blog Title is required"),
    }),
    defineField({
      name: "blog_short_description",
      type: "string",
      title: "Blog Short Description",
      description: "Short description of the blog",
      validation: (Rule) =>
        Rule.required().error("Blog Short Description is required"),
    }),
    defineField({
      name: "author",
      type: "string",
      title: "Author",
      validation: (Rule) => Rule.required().error("Author is required"),
    }),
    defineField({
      title: "Release Date",
      name: "releaseDate",
      type: "date",
      options: {
        dateFormat: "DD-MM-YYYY",
      },
      validation: (Rule) => Rule.required().error("Release Date is required"),
    }),
    defineField({
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Tags for the blog",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Blog Image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
    defineField({
      name: "available",
      type: "boolean",
      title: "Currently Active",
      description: "Availability status of the blog",
    }),
  ],
});
