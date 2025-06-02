import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  // Create cat breeds
  const breeds = await Promise.all([
    prisma.breed.create({
      data: {
        name: 'Persian',
        description:
          'Known for their long, luxurious fur and sweet personalities. Persian cats are one of the oldest cat breeds.',
        imageUrl: 'https://example.com/persian.jpg',
      },
    }),
    prisma.breed.create({
      data: {
        name: 'Siamese',
        description:
          'Elegant cats with distinctive color points and striking blue eyes. They are known for being vocal and intelligent.',
        imageUrl: 'https://example.com/siamese.jpg',
      },
    }),
    prisma.breed.create({
      data: {
        name: 'Maine Coon',
        description:
          'Large, gentle giants of the cat world. Known for their thick fur and friendly, dog-like personalities.',
        imageUrl: 'https://example.com/maine-coon.jpg',
      },
    }),
  ]);

  // Create cats
  await Promise.all([
    prisma.cat.create({
      data: {
        name: 'Luna',
        age: 2,
        gender: 'Female',
        color: 'White',
        imageUrl: 'https://example.com/luna.jpg',
        breedId: breeds[0].id, // Persian
      },
    }),
    prisma.cat.create({
      data: {
        name: 'Oliver',
        age: 3,
        gender: 'Male',
        color: 'Seal Point',
        imageUrl: 'https://example.com/oliver.jpg',
        breedId: breeds[1].id, // Siamese
      },
    }),
    prisma.cat.create({
      data: {
        name: 'Max',
        age: 4,
        gender: 'Male',
        color: 'Brown Tabby',
        imageUrl: 'https://example.com/max.jpg',
        breedId: breeds[2].id, // Maine Coon
      },
    }),
  ]);

  console.log('Database has been seeded! 🌱');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
