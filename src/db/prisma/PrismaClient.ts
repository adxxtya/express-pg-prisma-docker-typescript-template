import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const firstUser = await prisma.user.create({
  //   data: {
  //     email: "asdasfasasfsanewaddsdau@gmail.com",
  //     name: "Maurysdsa",
  //     posts: {
  //       create: {
  //         title: "Scondary Post in Prisma",
  //       },
  //     },
  //   },
  //   include: {
  //     posts: true,
  //   },
  // });

  const post = await prisma.post.create({
    data: {
      title: "Post on Graphql",
    },
    include: {
      author: true,
    },
  });

  const users = await prisma.user.findMany();

  console.table(post);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
