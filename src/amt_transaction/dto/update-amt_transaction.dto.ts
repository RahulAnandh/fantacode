import { PartialType } from '@nestjs/mapped-types';
import { CreateAmtTransactionDto } from './create-amt_transaction.dto';

export class UpdateAmtTransactionDto extends PartialType(CreateAmtTransactionDto) {}
