import { Author, Post, db } from "astro:db";
import { faker } from "@faker-js/faker";

// https://astro.build/db/seed
export default async function seed() {
  for (let i = 0; i < 10; i++) {
    const randomName = faker.person.fullName();
    const randomPostTitle = faker.lorem.word(5);
    const randomPostContent = faker.lorem.paragraph(2);

    const authors = await db
      .insert(Author)
      .values([
        {
          name: randomName,
        },
      ])
      .returning();

    const authorId = authors[0].id;

    await db.insert(Post).values([
      {
        title: randomPostTitle,
        content: randomPostContent,
        published: new Date(),

        authorId: authorId,
      },
    ]);
  }
}
