import { Module } from '@nestjs/common';
import { MuscleService } from './muscle.service';
import { MuscleController } from './muscle.controller';
import { muscleProviders } from './muscle.provider';

@Module({
  providers: [MuscleService, ...muscleProviders],
  controllers: [MuscleController],
})
export class MuscleModule {}
