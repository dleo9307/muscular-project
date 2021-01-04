import { BadRequestException, Inject, Injectable } from '@nestjs/common';
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
    return this.muscleRepository.findAll();
  }

  async getOrNotFound(id: number): Promise<Muscle> {
    const muscle: Muscle = await this.muscleRepository.findByPk(id);
    if(!muscle) throw new BadRequestException('Not found muscle');
    return muscle;
  }

  async create(input: MuscleCreateInput): Promise<Muscle> {
    return this.muscleRepository.create(input);
  }

  async deleteAll(): Promise<void> {
    return this.muscleRepository.truncate();
  }

  async deleteById(id: number): Promise<void> {
    const muscle: Muscle = await this.getOrNotFound(id);
    muscle.destroy();
  }
}
