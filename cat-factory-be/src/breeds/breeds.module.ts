import { Module } from '@nestjs/common';
import { BreedsService } from './breeds.service';
import { BreedsController } from './breeds.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [BreedsController],
  imports: [PrismaModule],
  providers: [BreedsService],
})
export class BreedsModule {}
