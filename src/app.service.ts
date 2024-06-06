import { Injectable } from '@nestjs/common';

export interface Response {
  data: {
    code: number;
  };
}

@Injectable()
export class AppService {
  getHello(): Response {
    return {
      data: {
        code: 0,
      },
    };
  }
}
