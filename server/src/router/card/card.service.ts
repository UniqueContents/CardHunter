import { Body, forwardRef, Inject, Injectable } from '@nestjs/common';
import { Card } from 'src/database/entity/card.entity';
import { EntityService } from 'src/database/main.service';
import { CardDto } from './dto/card.dto';

@Injectable()
export class CardService {
  constructor(
    @Inject(forwardRef(() => EntityService))
    private readonly entityService: EntityService,
  ) {}

  async getCardList() {
    return await this.entityService.card.findAll();
  }

  async createCardInfo(cardInfo: CardDto) {
    return await this.entityService.card.create(cardInfo);
  }
}
