import { Test, TestingModule } from '@nestjs/testing';
import { DespesesFixesController } from './despeses-fixes.controller';

describe('DespesesFixes Controller', () => {
  let controller: DespesesFixesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DespesesFixesController],
    }).compile();

    controller = module.get<DespesesFixesController>(DespesesFixesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
