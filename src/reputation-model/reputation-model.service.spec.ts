import { Test, TestingModule } from '@nestjs/testing';
import { ReputationModelService } from './reputation-model.service';

describe('ReputationModelService', () => {
  let service: ReputationModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReputationModelService],
    }).compile();

    service = module.get<ReputationModelService>(ReputationModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
