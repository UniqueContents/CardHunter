import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Card, CardSchema } from './entity/card.entity';
import { User, UserSchema } from './entity/user.entity';
import { EntityServiceModule } from './main.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/Card')],
  providers: [EntityServiceModule],
  exports: [EntityServiceModule],
})
export class DBMongoModule {}
