import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { StoryblokConfig } from '../../../config/storyblok-config.dto';

@Injectable()
export class HttpServiceInterceptor implements NestInterceptor {
  constructor(
    private httpService: HttpService,
    private readonly storyblokConfig: StoryblokConfig,
  ) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    this.httpService.axiosRef.defaults.headers.common['authorization'] =
      this.storyblokConfig.accessToken;

    return next.handle().pipe();
  }
}
