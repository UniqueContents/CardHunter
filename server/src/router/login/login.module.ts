import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({
    secret: 'jwtConstants.secret',
    signOptions: { expiresIn: '60s' },
  }),],
  providers: [LoginService],
  exports: [LoginService],
  controllers: [LoginController],
})
export class LoginModule {}
