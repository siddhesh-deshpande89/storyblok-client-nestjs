import { Module } from '@nestjs/common';
import { StoryblokController } from './controllers/storyblok.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { StoryblokService } from './services/storyblok.service';
import { StoryblokConfig } from '../../config/storyblok-config.dto';
import { plainToInstance } from 'class-transformer';

@Module({
  imports: [ConfigModule],
  controllers: [StoryblokController],
  providers: [
    {
      provide: StoryblokConfig,
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return plainToInstance(StoryblokConfig, {
          accessToken: config.get('storyblok.access_token'),
        });
      },
    },
    StoryblokService,
  ],
})
export class StoryblokModule {}
