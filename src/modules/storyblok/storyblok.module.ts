import { Module } from '@nestjs/common';
import { StoryblokController } from './controllers/storyblok.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { StoryblokService } from './services/storyblok.service';
import { StoryblokConfig } from '../../config/storyblok-config.dto';
import { plainToInstance } from 'class-transformer';
import { HttpModule } from '@nestjs/axios';
import { StoryblokClientFactory } from './factories/storyblok-client.factory';

@Module({
  imports: [ConfigModule, HttpModule],
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
    StoryblokClientFactory,
  ],
})
export class StoryblokModule {}
