import { Module } from '@nestjs/common';
import { AmtTransactionLogService } from './amt_transaction_log.service';
import { AmtTransactionLogController } from './amt_transaction_log.controller';

@Module({
  controllers: [AmtTransactionLogController],
  providers: [AmtTransactionLogService],
})
export class AmtTransactionLogModule {}
