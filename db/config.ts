import { column, defineDb, defineTable, NOW } from "astro:db";

const Author = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    createdAt: column.date({ default: NOW }),
    updatedAt: column.date({ default: NOW }),
  },
});

const Post = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    content: column.text(),
    published: column.date({ default: NOW }),
    createdAt: column.date({ default: NOW }),
    updatedAt: column.date({ default: NOW }),

    authorId: column.number({ references: () => Author.columns.id }),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Author, Post },
});
