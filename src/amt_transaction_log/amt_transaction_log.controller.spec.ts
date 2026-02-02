import { Test, TestingModule } from '@nestjs/testing';
import { AmtTransactionLogController } from './amt_transaction_log.controller';
import { AmtTransactionLogService } from './amt_transaction_log.service';

describe('AmtTransactionLogController', () => {
  let controller: AmtTransactionLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AmtTransactionLogController],
      providers: [AmtTransactionLogService],
    }).compile();

    controller = module.get<AmtTransactionLogController>(AmtTransactionLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
