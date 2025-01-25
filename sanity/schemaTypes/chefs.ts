import { defineType, defineField } from "sanity";

export default defineType({
  name: "chef",
  type: "document",
  title: "Chef",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Chef Name",
      validation: (Rule) => Rule.required().error("Chef Name is required"),
    }),
    defineField({
      name: "position",
      type: "string",
      title: "Position",
      description: "Role or title of the chef (e.g., Head Chef, Sous Chef)",
      validation: (Rule) => Rule.required().error("Position is required"),
    }),
    defineField({
      name: "experience",
      type: "number",
      title: "Years of Experience",
      description: "Number of years the chef has worked in the culinary field",
      validation: (Rule) =>
        Rule.required().min(0).error("Experience must be a positive number"),
    }),
    defineField({
      name: "specialty",
      type: "string",
      title: "Specialty",
      description: "Specialization of the chef (e.g., Italian Cuisine, Pastry)",
      validation: (Rule) => Rule.required().error("Specialty is required"),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Chef Image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("Chef Image is required"),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      description: "Short bio or introduction about the chef",
      validation: (Rule) => Rule.required().error("Description is required"),
    }),
    defineField({
      name: "available",
      type: "boolean",
      title: "Currently Active",
      description: "Availability status of the chef",
      initialValue: true, // Sets default value to true
    }),
  ],
});
