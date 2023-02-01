import { Module } from '@nestjs/common';
import { LoginModule } from './router/login/login.module';
import { DBMongoModule } from './database/mongo.module';
import { CardModule } from './router/card/card.module';
import { EntityServiceModule } from './database/main.module';

@Module({
  imports: [DBMongoModule, EntityServiceModule, LoginModule, CardModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
