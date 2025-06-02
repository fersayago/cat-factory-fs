import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@ApiTags('cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new cat' })
  @ApiResponse({
    status: 201,
    description: 'The cat has been successfully created.',
    type: Cat,
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all cats' })
  @ApiResponse({ status: 200, description: 'Return all cats.', type: [Cat] })
  findAll() {
    return this.catsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a cat by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the cat' })
  @ApiResponse({ status: 200, description: 'Return the cat.', type: Cat })
  @ApiResponse({ status: 404, description: 'Cat not found.' })
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a cat by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the cat' })
  @ApiResponse({
    status: 200,
    description: 'The cat has been successfully updated.',
    type: Cat,
  })
  @ApiResponse({ status: 404, description: 'Cat not found.' })
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(id, updateCatDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a cat by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the cat' })
  @ApiResponse({
    status: 200,
    description: 'The cat has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Cat not found.' })
  remove(@Param('id') id: string) {
    return this.catsService.remove(id);
  }
}
