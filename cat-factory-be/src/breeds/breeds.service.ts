import { Injectable } from '@nestjs/common';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class BreedsService {
  constructor(private prisma: PrismaService) {}

  create(createBreedDto: CreateBreedDto) {
    return this.prisma.breed.create({
      data: createBreedDto,
    });
  }

  findAll() {
    return this.prisma.breed.findMany();
  }

  findOne(id: string) {
    return this.prisma.breed.findUnique({
      where: { id },
    });
  }

  update(id: string, updateBreedDto: UpdateBreedDto) {
    return this.prisma.breed.update({
      where: { id },
      data: updateBreedDto,
    });
  }

  remove(id: string) {
    return this.prisma.breed.delete({
      where: { id },
    });
  }
}
