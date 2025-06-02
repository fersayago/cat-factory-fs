import { ApiProperty } from '@nestjs/swagger';
import { Gender } from '@prisma/client';

export class CreateCatDto {
  @ApiProperty({
    description: 'The name of the cat',
    example: 'Luna',
  })
  name: string;

  @ApiProperty({
    description: 'The age of the cat',
    minimum: 0,
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
    required: false,
    example: 'https://example.com/cat.jpg',
  })
  imageUrl?: string;

  @ApiProperty({
    description: 'The ID of the cat breed',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  breedId: string;
}
