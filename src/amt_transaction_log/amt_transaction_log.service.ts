import { Injectable } from '@nestjs/common';
import { CreateAmtTransactionLogDto } from './dto/create-amt_transaction_log.dto';
import { UpdateAmtTransactionLogDto } from './dto/update-amt_transaction_log.dto';

@Injectable()
export class AmtTransactionLogService {
  create(createAmtTransactionLogDto: CreateAmtTransactionLogDto) {
    return 'This action adds a new amtTransactionLog';
  }

  findAll() {
    return `This action returns all amtTransactionLog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} amtTransactionLog`;
  }

  update(id: number, updateAmtTransactionLogDto: UpdateAmtTransactionLogDto) {
    return `This action updates a #${id} amtTransactionLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} amtTransactionLog`;
  }
}
