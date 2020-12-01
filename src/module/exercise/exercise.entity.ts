import {
  AllowNull,
  AutoIncrement,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Muscle } from '../muscle/muscle.entity';

@Table
export class Exercise extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column
  @ForeignKey(() => Muscle)
  muscleId: number;

  @AllowNull(false)
  @Column
  name: string;

  @Column
  machine?: string;

  @AllowNull(false)
  @Column
  round: number;

  @AllowNull(false)
  @Column
  reps: number;

  @Column
  @AllowNull(false)
  @Column
  createdAt: Date;

  @AllowNull(false)
  @Column
  updatedAt: Date;
}
