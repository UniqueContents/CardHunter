import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CardService } from './service/card.service';
import { UserService } from './service/user.service';

@Injectable()
export class EntityService {
  constructor(
    @Inject(forwardRef(() => UserService))
    public readonly user: UserService,
    @Inject(forwardRef(() => CardService))
    public readonly card: CardService,
  ) {}
}
