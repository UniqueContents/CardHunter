import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CardService } from './card.service';
import { CardDto } from './dto/card.dto';

@ApiTags('card')
@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get()
  @ApiCreatedResponse({ status: 200, description: 'success' })
  @ApiOperation({ summary: 'card api', description: '카드 리스트 조회' })
  async getCardList() {
    try {
      return this.cardService.getCardList();
    } catch (e) {
      console.log(e);
    }
  }

  @Post()
  @ApiCreatedResponse({ status: 200, description: 'success' })
  @ApiOperation({ summary: 'card api', description: '카드 리스트 조회' })
  async createCard(@Body() cardDto: CardDto) {
    try {
      return this.cardService.createCardInfo(cardDto);
    } catch (e) {
      console.log(e);
    }
  }
}
