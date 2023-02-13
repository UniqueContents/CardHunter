import { Module } from '@nestjs/common';
import { LoginModule } from './router/login/login.module';
import { DBMongoModule } from './database/mongo.module';
import { CardModule } from './router/card/card.module';
import { EntityServiceModule } from './database/main.module';
import { MLoggerModule } from './middleware/logger.module';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [
    DBMongoModule,
    EntityServiceModule,
    LoginModule,
    CardModule,
    LoggerModule,
    MLoggerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
