import { User, UserSchema } from './entity/user.entity';
import { Card, CardSchema } from './entity/card.entity';

// export const DBEntries = [User, Card];
export const DBEntries = [
  { name: User.name, schema: UserSchema },
  { name: Card.name, schema: CardSchema },
];
