import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { MuscleService } from './muscle.service';
import { MuscleCreateInput } from './dto/muscle.dto';

@Controller('muscles')
export class MuscleController {
  constructor(private readonly muscleService: MuscleService) {}

  @Get()
  async getPage() {
    return this.muscleService.getPage();
  }

  @Post()
  async create(@Body() muscleCreateInput: MuscleCreateInput) {
    return this.muscleService.create(muscleCreateInput);
  }

  @Delete()
  async deleteAll() {
    return this.muscleService.deleteAll();
  }
}
