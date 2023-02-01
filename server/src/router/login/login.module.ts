import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
  providers: [LoginService],
  exports: [LoginService],
  controllers: [LoginController],
})
export class LoginModule {}
