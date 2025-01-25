export default {
  name: "Blogs",
  type: "document",
  title: "Blogs",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Blog Titile",
      required: true,
    },
    {
      name: "blog_short_description",
      type: "string",
      title: "Blog short description",
      description: "Short Discription of the blog",
      required: true,
    },
    {
      name: "author",
      type: "string",
      title: "Author",
      required: true,
    },
    {
      title: "Release date",
      name: "releaseDate",
      type: "date",
      options: {
        dateFormat: "DD-MM-YYYY",
        calendarTodayLabel: "Today",
      },
      required: true,
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Tags for Blog",
    },
    {
      name: "image",
      type: "image",
      title: "Chef Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Detail bio or introduction about the Blog",
    },
    {
      name: "available",
      type: "boolean",
      title: "Currently Active",
      description: "Availability status of the Blog",
    },
  ],
};
