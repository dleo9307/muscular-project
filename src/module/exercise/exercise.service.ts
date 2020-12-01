import { Inject, Injectable } from '@nestjs/common';
import { Exercise } from './exercise.entity';

import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class ExerciseService {
  constructor(
    @Inject('EXERCISE_REPOSITORY')
    private readonly exerciseRepository: typeof Exercise,
    @Inject('SEQUELIZE') private readonly sequelizeProvider: Sequelize,
  ) {}
}
