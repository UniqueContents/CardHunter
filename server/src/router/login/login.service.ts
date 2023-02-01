import { Body, forwardRef, Inject, Injectable } from '@nestjs/common';
import { EntityService } from 'src/database/main.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class LoginService {
  constructor(
    @Inject(forwardRef(() => EntityService))
    private readonly entityService: EntityService,
  ) {}

  async login(@Body() loginDto: LoginDto) {
    try {
      const result = await this.entityService.user.findOne(loginDto);
      return { statusCode: 200, message: ['success'], result: result };
    } catch (e) {
      console.log(e);
    }
  }
}
