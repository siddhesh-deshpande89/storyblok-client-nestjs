import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StoryblokService } from '../services/storyblok.service';
import { HttpServiceInterceptor } from '../interceptors/storyblok-auth.interceptor';

@Controller('storyblok')
@ApiTags('Storyblok')
export class StoryblokController {
  constructor(private readonly storyblokService: StoryblokService) {}

  @Get('story/:folder/:slug')
  @UseInterceptors(HttpServiceInterceptor)
  getBlogArticle(@Param('folder') folder, @Param('slug') slug) {
    const url = `${folder}/${slug}`;
    return this.storyblokService.getArticle(url);
  }
}
