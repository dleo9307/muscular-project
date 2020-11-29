import { Global, Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [ConfigService],
  providers: [databaseProviders],
  exports: [databaseProviders],
})
export class DatabaseModule {}
