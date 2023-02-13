import { forwardRef, Inject, Injectable, LoggerService } from '@nestjs/common';
import { EntityService } from 'src/database/main.service';
import * as winston from 'winston';

@Injectable()
export class CustomLoggerService implements LoggerService {
  private readonly logger: winston.Logger;

  constructor(
    @Inject(forwardRef(() => EntityService))
    private readonly entity: EntityService,
  ) {
    this.logger = winston.createLogger({
      transports: [
        new winston.transports.Console({
          level: 'debug',
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple(),
            winston.format.printf((obj) => {
              return `${obj.level}: [time] ${obj.message}`;
            }),
          ),
        }),
      ],
    });

    globalThis.logger = this;
  }

  log(content: ILogContent) {
    this.logger.info(content.message);
    // db에 넣는 코드
  }
  error(content: ILogContent) {
    this.logger.error(content.message);
  }
  warn(content: ILogContent) {
    this.logger.warn(content.message);
  }
  debug?(content: ILogContent) {
    this.logger.debug(content.message);
  }
  verbose?(content: string) {
    this.logger.verbose(content);
  }
}

interface ILogContent {
  message?: string;
}
