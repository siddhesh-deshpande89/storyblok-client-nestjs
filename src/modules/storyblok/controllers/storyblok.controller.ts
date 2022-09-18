import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StoryblokService } from '../services/storyblok.service';

@Controller('storyblok')
@ApiTags('Storyblok')
export class StoryblokController {
  constructor(private readonly storyblokService: StoryblokService) {}

  @Get('story/:folder/:slug')
  async getBlogArticle(@Param('folder') folder, @Param('slug') slug) {
    const url = `${folder}/${slug}`;
    const { story } = await this.storyblokService.getPage(url);
    return { data: story };
  }
}
