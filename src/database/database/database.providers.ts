import { Sequelize } from 'sequelize-typescript';
import { ConfigService } from '@nestjs/config';
import { SEQUELIZE } from './database.constants';

export const databaseProviders: {
  provide: string;
  useFactory: (configService: ConfigService) => Promise<Sequelize>;
  inject: typeof ConfigService[];
} = {
  inject: [ConfigService],
  provide: SEQUELIZE,
  useFactory: async (configService: ConfigService) => {
    const sequelize: Sequelize = new Sequelize({
      dialect: configService.get('DATABASE_DIALECT'),
      host: configService.get('DATABASE_HOST'),
      port: configService.get('DATABASE_PORT'),
      username: configService.get('DATABASE_USER'),
      password: configService.get('DATABASE_PASSWORD'),
      database: configService.get('DATABASE_DB'),
      dialectOptions: {
        useUTC: false,
      },
      define: {
        freezeTableName: true,
        timestamps: true,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
      },
      timezone: 'Asia/Seoul',
      logging: console.log,
    });
    sequelize.addModels([]);
    await sequelize.sync();
    return sequelize;
  },
};