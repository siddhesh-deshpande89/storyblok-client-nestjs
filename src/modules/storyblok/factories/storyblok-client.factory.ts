import { HttpException, Injectable, UseInterceptors } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, map, Observable } from 'rxjs';

@Injectable()
export class StoryblokClientFactory {
  constructor(private readonly httpService: HttpService) {}

  getStory(url: string): Observable<unknown> {
    console.log('here');
    return this.httpService
      .get(`https://mapi.storyblok.com/v1/spaces/173506/stories/185271671`)
      .pipe(
        map((resp) => {
          console.log(resp);
          return resp;
        }),
        catchError((err) => {
          console.error(err);
          throw new HttpException(
            'Error fetching single story from storyblok',
            500,
          );
        }),
      );
  }
}
