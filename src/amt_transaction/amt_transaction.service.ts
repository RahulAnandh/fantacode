import { Injectable } from '@nestjs/common';
import { CreateAmtTransactionDto } from './dto/create-amt_transaction.dto';
import { UpdateAmtTransactionDto } from './dto/update-amt_transaction.dto';

@Injectable()
export class AmtTransactionService {
  create(createAmtTransactionDto: CreateAmtTransactionDto) {
    return 'This action adds a new amtTransaction';
  }

  findAll() {
    return `This action returns all amtTransaction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} amtTransaction`;
  }

  update(id: number, updateAmtTransactionDto: UpdateAmtTransactionDto) {
    return `This action updates a #${id} amtTransaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} amtTransaction`;
  }
}
