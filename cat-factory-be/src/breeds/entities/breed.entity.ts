import { Breed as PrismaBreed } from '@prisma/client';

export class Breed implements PrismaBreed {
  id: string;
  name: string;
  description: string;
  imageUrl: string | null;
}
