import { Module } from '@nestjs/common';
import { StoryblokModule } from './modules/storyblok/storyblok.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { validate } from './config/env.validation';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration], validate }),
    StoryblokModule,
  ],
})
export class AppModule {}
