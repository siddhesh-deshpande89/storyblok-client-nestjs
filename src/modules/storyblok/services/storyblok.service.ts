import { Injectable } from '@nestjs/common';
import { StoryblokConfig } from '../../../config/storyblok-config.dto';
const StoryblokClient = require('storyblok-js-client');

@Injectable()
export class StoryblokService {
  private readonly storyblokClient;
  constructor(config: StoryblokConfig) {
    this.storyblokClient = new StoryblokClient(config);
  }

  async getPage(url: string) {
    const response = await this.storyblokClient.getStory(url, {
      version: 'draft',
      // cv: this.getCacheValidationTimeStamp()
    });
    return response.data;
  }

  // getCacheValidationTimeStamp () {
  //   const date = new Date();
  //   date.setSeconds(0, 0);
  //   return date.toISOString();
  // }
}
