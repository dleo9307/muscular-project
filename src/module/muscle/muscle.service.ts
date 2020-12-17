import { Inject, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { Muscle } from './muscle.entity';
import { MuscleCreateInput } from './dto/muscle.dto';

@Injectable()
export class MuscleService {
  constructor(
    @Inject('MUSCLE_REPOSITORY')
    private readonly muscleRepository: typeof Muscle,
    @Inject('SEQUELIZE') private readonly sequelizeProvider: Sequelize,
  ) {}

  async getPage(): Promise<Muscle[]> {
    console.log('test');
    console.log('test2');
    console.log('test2');
    console.log('test');
    console.log('test');
    return this.muscleRepository.findAll();
  }

  async create(input: MuscleCreateInput): Promise<Muscle> {
    return this.muscleRepository.create(input);
  }
}
