import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'email' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'password' })
  readonly password: string;
}
