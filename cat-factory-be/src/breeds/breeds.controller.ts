import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BreedsService } from './breeds.service';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Breed } from './entities/breed.entity';

@Controller('breeds')
export class BreedsController {
  constructor(private readonly breedsService: BreedsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new breed' })
  @ApiResponse({
    status: 201,
    description: 'The breed has been successfully created.',
    type: Breed,
  })
  create(@Body() createBreedDto: CreateBreedDto) {
    return this.breedsService.create(createBreedDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all breeds' })
  @ApiResponse({
    status: 200,
    description: 'Return all breeds.',
    type: [Breed],
  })
  findAll() {
    return this.breedsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a breed by ID' })
  @ApiResponse({
    status: 200,
    description: 'Return the breed.',
    type: Breed,
  })
  findOne(@Param('id') id: string) {
    return this.breedsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a breed by ID' })
  @ApiResponse({
    status: 200,
    description: 'The breed has been successfully updated.',
    type: Breed,
  })
  update(@Param('id') id: string, @Body() updateBreedDto: UpdateBreedDto) {
    return this.breedsService.update(id, updateBreedDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a breed by ID' })
  @ApiResponse({
    status: 200,
    description: 'The breed has been successfully deleted.',
  })
  remove(@Param('id') id: string) {
    return this.breedsService.remove(id);
  }
}
