import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { PrismaModule } from './prisma/prisma.module';
import { BreedsModule } from './breeds/breeds.module';

@Module({
  imports: [CatsModule, PrismaModule, BreedsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
