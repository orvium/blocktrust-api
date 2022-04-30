import { Test, TestingModule } from '@nestjs/testing';
import { ReputationModelController } from './reputation-model.controller';

describe('ReputationModelController', () => {
  let controller: ReputationModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReputationModelController],
    }).compile();

    controller = module.get<ReputationModelController>(ReputationModelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
