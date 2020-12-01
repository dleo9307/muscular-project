import { Model } from 'sequelize-typescript';
import { Exercise } from './exercise.entity';

export const exerciseProviders: { useValue: typeof Model; provide: string }[] = [
  {
    provide: 'EXERCISE_REPOSITORY',
    useValue: Exercise,
  },
];
