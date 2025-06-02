import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  constructor(private prisma: PrismaService) {}

  create(createCatDto: CreateCatDto) {
    return this.prisma.cat.create({
      data: createCatDto,
      include: {
        breed: true,
      },
    });
  }

  findAll() {
    return this.prisma.cat.findMany({
      include: {
        breed: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.cat.findUnique({
      where: { id },
      include: {
        breed: true,
      },
    });
  }

  update(id: string, updateCatDto: UpdateCatDto) {
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
