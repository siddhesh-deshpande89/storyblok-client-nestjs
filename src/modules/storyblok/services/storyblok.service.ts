import { Injectable } from '@nestjs/common';
import { StoryblokClientFactory } from '../factories/storyblok-client.factory';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class StoryblokService {
  constructor(private readonly storyblokClient: StoryblokClientFactory) {}

  async getArticle(url: string) {
    const response = await lastValueFrom(
      this.storyblokClient.getStory(url).pipe(map((resp: any) => resp.data)),
    );
    return { data: response };
  }
}
