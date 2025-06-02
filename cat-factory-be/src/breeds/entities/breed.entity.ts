import { ApiProperty } from '@nestjs/swagger';
import { Breed as PrismaBreed } from '@prisma/client';

export class Breed implements PrismaBreed {
  @ApiProperty({
    description: 'The ID of the breed',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  id: string;

  @ApiProperty({
    description: 'The name of the breed',
    example: 'Persian',
  })
  name: string;

  @ApiProperty({
    description: 'The description of the breed',
    example: 'Persian cat is a breed of cat with a long, thick coat.',
  })
  description: string;

  @ApiProperty({
    description: 'The URL of the breed image',
    example: 'https://example.com/breed.jpg',
  })
  imageUrl: string | null;
}
