import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService){}

  @Post()
  async login(@Body() loginDto: LoginDto){
    const result = await this.loginService.login(loginDto);
    if(result === undefined){
      return { statusCode: 200, message: ['failed'] }
    }
    return { statusCode: 200, message: ['success'], result: result };
  }
}
