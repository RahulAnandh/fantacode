import { Test, TestingModule } from '@nestjs/testing';
import { AmtTransactionController } from './amt_transaction.controller';
import { AmtTransactionService } from './amt_transaction.service';

describe('AmtTransactionController', () => {
  let controller: AmtTransactionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AmtTransactionController],
      providers: [AmtTransactionService],
    }).compile();

    controller = module.get<AmtTransactionController>(AmtTransactionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
