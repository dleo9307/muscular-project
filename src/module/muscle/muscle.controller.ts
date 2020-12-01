import { Body, Controller, Post } from '@nestjs/common';
import { MuscleService } from './muscle.service';
import { MuscleCreateInput } from './dto/muscle.dto';

@Controller('muscles')
export class MuscleController {
  constructor(private readonly muscleService: MuscleService) {}

  @Post()
  async create(@Body() muscleCreateInput: MuscleCreateInput) {
    return this.muscleService.create(muscleCreateInput);
  }
}
