import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

export class CardDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: '카드 제공자' })
  readonly cardProvider: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ type: String, description: '카드 제작일' })
  readonly releaseDate?: string;

  @IsNotEmpty()
  @IsObject()
  @ApiProperty({ type: Object, description: '카드 혜택' })
  readonly benefit: object;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ type: Number, description: '연회비' })
  readonly annualFee: number;
}
