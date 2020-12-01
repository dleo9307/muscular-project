import { Body, Controller, Get, Post } from '@nestjs/common';
import { MuscleService } from './muscle.service';
import { MuscleCreateInput } from './dto/muscle.dto';

@Controller('muscles')
export class MuscleController {
  constructor(private readonly muscleService: MuscleService) {}

  @Get()
  async getPage() {
    return this.muscleService.getPage();
  }

  @Get()
  @Post()
  async create(@Body() muscleCreateInput: MuscleCreateInput) {
    return this.muscleService.create(muscleCreateInput);
  }
}
