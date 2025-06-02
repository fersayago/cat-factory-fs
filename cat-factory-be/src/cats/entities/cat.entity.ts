import { ApiProperty } from '@nestjs/swagger';
import { Breed } from '../../breeds/entities/breed.entity';
import { Gender, Cat as PrismaCat } from '@prisma/client';

export class Cat implements PrismaCat {
  @ApiProperty({
    description: 'The ID of the cat',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  id: string;

  @ApiProperty({
    description: 'The name of the cat',
    example: 'Luna',
  })
  name: string;

  @ApiProperty({
    description: 'The age of the cat',
    example: 2,
  })
  age: number;

  @ApiProperty({
    description: 'The gender of the cat',
    example: 'Female',
  })
  gender: Gender;

  @ApiProperty({
    description: 'The color of the cat',
    example: 'White',
  })
  color: string;

  @ApiProperty({
    description: 'The URL of the cat image',
    example: 'https://example.com/cat.jpg',
  })
  imageUrl: string | null;

  @ApiProperty({
    description: 'The ID of the breed of the cat',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  breedId: string;

  @ApiProperty({
    description: 'The breed of the cat',
    type: Breed,
  })
  breed?: Breed;
}
