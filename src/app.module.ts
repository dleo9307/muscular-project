import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MuscleModule } from './module/muscle/muscle.module';
import { DatabaseModule } from './database/database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MuscleModule,
    DatabaseModule,
  ],
})
export class AppModule {}
