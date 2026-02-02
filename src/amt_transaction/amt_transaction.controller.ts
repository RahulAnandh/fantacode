import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AmtTransactionService } from './amt_transaction.service';
import { CreateAmtTransactionDto } from './dto/create-amt_transaction.dto';
import { UpdateAmtTransactionDto } from './dto/update-amt_transaction.dto';

@Controller('amt-transaction')
export class AmtTransactionController {
  constructor(private readonly amtTransactionService: AmtTransactionService) {}

  @Post()
  create(@Body() createAmtTransactionDto: CreateAmtTransactionDto) {
    return this.amtTransactionService.create(createAmtTransactionDto);
  }

  @Get()
  findAll() {
    return this.amtTransactionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.amtTransactionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAmtTransactionDto: UpdateAmtTransactionDto) {
    return this.amtTransactionService.update(+id, updateAmtTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.amtTransactionService.remove(+id);
  }
}
