import { ApiProperty } from '@nestjs/swagger';

export class CreateBreedDto {
  @ApiProperty({
    description: 'The name of the breed',
    example: 'Persian',
  })
  name: string;

  @ApiProperty({
    description: 'The description of the breed',
    example:
      'Persian is a breed of cat characterized by its long, thick fur and round face.',
  })
  description: string;

  @ApiProperty({
    description: 'The image URL of the breed',
    example: 'https://example.com/persian.jpg',
  })
  imageUrl?: string;
}
