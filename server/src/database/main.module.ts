import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBEntries } from './main.entries';
import { EntityService } from './main.service';
import { UserService } from './service/user.service';
import { CardService } from './service/card.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entity/user.entity';
import { Card, CardSchema } from './entity/card.entity';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature(DBEntries),
    // MongooseModule.forFeature([{ name: Card.name, schema: CardSchema }]),
  ],
  providers: [EntityService, UserService, CardService],
  exports: [EntityService],
})
export class EntityServiceModule {}
