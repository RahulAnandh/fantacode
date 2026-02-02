import { Module } from '@nestjs/common';
import { AmtTransactionService } from './amt_transaction.service';
import { AmtTransactionController } from './amt_transaction.controller';

@Module({
  controllers: [AmtTransactionController],
  providers: [AmtTransactionService],
})
export class AmtTransactionModule {}
