import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Github Actions CI/CD!! Second!!!!';
  }
}
