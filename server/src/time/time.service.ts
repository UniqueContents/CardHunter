import { Injectable } from '@nestjs/common';
import moment from 'moment';

@Injectable()
export class TimeService {
  public getTime(time?: Date | string, format = 'YYYY-MM-DD HH:MM:SS'): string {
    return moment(time).format(format).toString();
  }
}
