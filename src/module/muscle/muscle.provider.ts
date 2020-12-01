import { Model } from 'sequelize-typescript';
import { Muscle } from './muscle.entity';

export const muscleProviders: { useValue: typeof Model; provide: string }[] = [
  {
    provide: 'MUSCLE_REPOSITORY',
    useValue: Muscle,
  },
];
