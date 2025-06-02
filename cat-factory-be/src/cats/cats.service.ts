import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(createCatDto: CreateCatDto) {
    return this.prisma.cat.create({
      data: createCatDto,
      include: {
        breed: true,
      },
    });
  }

  async findAll() {
    return this.prisma.cat.findMany({
      include: {
        breed: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.cat.findUnique({
      where: { id },
      include: {
        breed: true,
      },
    });
  }

  async update(id: string, updateCatDto: UpdateCatDto) {
    return this.prisma.cat.update({
      where: { id },
      data: updateCatDto,
      include: {
        breed: true,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.cat.delete({
      where: { id },
    });
  }
}
