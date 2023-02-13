import { Body, forwardRef, Inject, Injectable } from '@nestjs/common';
import { EntityService } from 'src/database/main.service';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {
  constructor(
    @Inject(forwardRef(() => EntityService))
    private readonly entityService: EntityService,
    private jwtService: JwtService,
  ) {}

  async login(@Body() loginDto: LoginDto) {
    try {
      const user = await this.entityService.user.findOne(loginDto);
      if(!user){
        return undefined;
      }

      return { access_token: this.jwtService.sign({ test: "test" })};
    } catch (e) {
      console.log(e);
    }
  }
}
