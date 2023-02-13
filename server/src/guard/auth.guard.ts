import {
  CanActivate,
  ExecutionContext,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { Request } from 'express';
import { EntityService } from 'src/database/main.service';

export class AuthGuard implements CanActivate {
  constructor(
    @Inject(forwardRef(() => EntityService))
    private readonly entity: EntityService,
  ) {}
  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    try {
      const request = ctx.switchToHttp().getRequest() as Request;
      const id = request.headers['access_token'] as string;
      const login = await this.entity.user.findOne({
        email: id,
        password: 'test',
      });
      return login !== undefined;
    } catch (e) {
      return false;
    }
  }
}
