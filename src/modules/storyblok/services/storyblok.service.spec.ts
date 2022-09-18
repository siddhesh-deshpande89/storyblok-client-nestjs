import { Test, TestingModule } from '@nestjs/testing';
import { StoryblokService } from './storyblok.service';

describe('StoryblokService', () => {
  let service: StoryblokService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoryblokService],
    }).compile();

    service = module.get<StoryblokService>(StoryblokService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
