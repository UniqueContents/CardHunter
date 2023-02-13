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
      const result = await this.cardService.getCardList();
      return { statusCode: 200, message: ['success'], result: result };
    } catch (e) {
      console.log(e);
    }
  }

  @Post()
  @ApiCreatedResponse({ status: 200, description: 'success' })
  @ApiOperation({ summary: 'card api', description: '카드 리스트 조회' })
  async createCard(@Body() cardDto: CardDto) {
    try {
      const result = await this.cardService.createCardInfo(cardDto);  
      return { statusCode: 200, message: ['success'], result: result };
    } catch (e) {
      console.log(e);
    }
  }
}
