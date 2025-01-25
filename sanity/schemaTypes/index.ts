import { type SchemaTypeDefinition } from "sanity";
import food from "./foods";
import chefs from "./chefs";
import blogs from "./blogs";
import { blockContentType } from "./blockContentType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [food, chefs, blogs, blockContentType],
};
