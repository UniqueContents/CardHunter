import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { v4 } from 'uuid';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const url = req.originalUrl.split('?')[0];
    const uniq = v4();
    const startTime = new Date().getTime();

    const ipAddr: string = (
      ((req.headers['x-forwarded-for'] as string)?.split(',')[0] ||
        req.connection.remoteAddress) as string
    )
      ?.replace('\\', '')
      .split('::ffff:')
      .reverse()[0];

    logger.verbose(
      `[REQ][${uniq}] ${ipAddr} | "${req.method} ${url}" ${JSON.stringify({
        ...req.query,
        ...req.body,
      })} | ${req.headers['user-agent']}`,
    );

    res.on('finish', () => {
      const responseLog = `[RES][${uniq}] ${ipAddr} | "${req.method} ${
        res.statusCode
      } ${url}" | ${req.headers['user-agent']} ${(
        new Date().getTime() - startTime
      ).toLocaleString()}ms`;
      if (res.statusCode > 400 && process.env.NODE_ENV !== 'production') {
        logger.error({ message: responseLog });
      } else {
        logger.verbose(responseLog);
      }
    });
    next();
  }
}
