import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CardDto } from 'src/router/card/dto/card.dto';
import { Card, CardDocument } from '../entity/card.entity';

@Injectable()
export class CardService {
  constructor(@InjectModel(Card.name) private cardModel: Model<CardDocument>) {}

  async create(cardDto: CardDto) {
    const createdUser = new this.cardModel(cardDto);
    return createdUser.save();
  }

  async findAll(): Promise<Card[]> {
    return this.cardModel.find().exec();
  }
}
