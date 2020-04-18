import { Test, TestingModule } from '@nestjs/testing';
import { DespesesFixesService } from './despeses-fixes.service';

describe('DespesesFixesService', () => {
  let service: DespesesFixesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DespesesFixesService],
    }).compile();

    service = module.get<DespesesFixesService>(DespesesFixesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
