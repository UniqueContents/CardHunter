import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, now } from 'mongoose';

export type CardDocument = Card & Document;

@Schema()
export class Card {
  @Prop(String)
  cardProvider: string;

  @Prop(String)
  releaseDate?: string;

  @Prop({ type: Object, default: 0 })
  benefit: object;

  @Prop(Number)
  annualFee: number;

  @Prop({ default: now() })
  createdAt: Date;

  @Prop({ default: now() })
  updatedAt: Date;
}

export const CardSchema = SchemaFactory.createForClass(Card);
