// Products
const products = {
  name: "food",
  type: "document",
  title: "Food",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Food Name",
    },
    {
      name: "category",
      type: "string",
      title: "Category",
      description:
        "Category of the food item (e.g., Burger, Sandwich, Drink, etc.)",
    },
    {
      name: "salePrice",
      type: "number",
      title: "Sale Price",
      description: "Price before discount (if any)",
    },
    {
      name: "originalPrice",
      type: "number",
      title: "Original Price",
      description: "Price before discount (if any)",
    },
    {
      name: "quantity",
      type: "number",
      title: "Quantity",
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Tags for categorization (e.g., Best Seller, Popular, New)",
    },
    {
      name: "image",
      type: "image",
      title: "Food Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Short description of the food item",
    },
    {
      name: "available",
      type: "boolean",
      title: "Available",
      description: "Availability status of the food item",
    },
  ],
};

// Chefs
const chefs = {
  name: "chef",
  type: "document",
  title: "Chef",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Chef Name",
    },
    {
      name: "position",
      type: "string",
      title: "Position",
      description: "Role or title of the chef (e.g., Head Chef, Sous Chef)",
    },
    {
      name: "experience",
      type: "number",
      title: "Years of Experience",
      description: "Number of years the chef has worked in the culinary field",
    },
    {
      name: "specialty",
      type: "string",
      title: "Specialty",
      description: "Specialization of the chef (e.g., Italian Cuisine, Pastry)",
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
      description: "Short bio or introduction about the chef",
    },
    {
      name: "available",
      type: "boolean",
      title: "Currently Active",
      description: "Availability status of the chef",
    },
  ],
};

// Blogs
const blogs = {
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
