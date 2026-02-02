import { Test, TestingModule } from '@nestjs/testing';
import { AmtTransactionService } from './amt_transaction.service';

describe('AmtTransactionService', () => {
  let service: AmtTransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AmtTransactionService],
    }).compile();

    service = module.get<AmtTransactionService>(AmtTransactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
