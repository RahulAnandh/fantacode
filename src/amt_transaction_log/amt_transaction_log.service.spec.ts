import { Test, TestingModule } from '@nestjs/testing';
import { AmtTransactionLogService } from './amt_transaction_log.service';

describe('AmtTransactionLogService', () => {
  let service: AmtTransactionLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AmtTransactionLogService],
    }).compile();

    service = module.get<AmtTransactionLogService>(AmtTransactionLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
