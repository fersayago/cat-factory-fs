import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [CatsController],
  imports: [PrismaModule],
  providers: [CatsService],
})
export class CatsModule {}
