import { IsNotEmpty } from 'class-validator';

export class StoryblokConfig {
  @IsNotEmpty()
  accessToken: string;
}
