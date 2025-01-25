import { defineField, defineType } from "sanity";

export default defineType({
  name: "Food",
  type: "document",
  title: "Food",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Food Name",
    }),
    defineField({
      name: "category",
      type: "string",
      title: "Category",
      description:
        "Category of the food item (e.g., Burger, Sandwich, Drink, etc.)",
    }),
    defineField({
      name: "salePrice",
      type: "number",
      title: "Sale Price",
      description: "Price before discount (if any)",
    }),
    defineField({
      name: "originalPrice",
      type: "number",
      title: "Original Price",
      description: "Price before discount (if any)",
    }),
    defineField({
      name: "quantity",
      type: "number",
      title: "Quantity",
    }),
    defineField({
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Tags for categorization (e.g., Best Seller, Popular, New)",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Food Image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      description: "Short description of the food item",
    }),
    defineField({
      name: "available",
      type: "boolean",
      title: "Available",
      description: "Availability status of the food item",
    }),
  ],
});
