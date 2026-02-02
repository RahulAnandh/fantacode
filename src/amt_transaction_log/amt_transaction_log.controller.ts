import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AmtTransactionLogService } from './amt_transaction_log.service';
import { CreateAmtTransactionLogDto } from './dto/create-amt_transaction_log.dto';
import { UpdateAmtTransactionLogDto } from './dto/update-amt_transaction_log.dto';

@Controller('amt-transaction-log')
export class AmtTransactionLogController {
  constructor(private readonly amtTransactionLogService: AmtTransactionLogService) {}

  @Post()
  create(@Body() createAmtTransactionLogDto: CreateAmtTransactionLogDto) {
    return this.amtTransactionLogService.create(createAmtTransactionLogDto);
  }

  @Get()
  findAll() {
    return this.amtTransactionLogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.amtTransactionLogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAmtTransactionLogDto: UpdateAmtTransactionLogDto) {
    return this.amtTransactionLogService.update(+id, updateAmtTransactionLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.amtTransactionLogService.remove(+id);
  }
}
