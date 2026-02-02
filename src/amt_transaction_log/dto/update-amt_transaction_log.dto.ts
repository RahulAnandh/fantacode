import { PartialType } from '@nestjs/mapped-types';
import { CreateAmtTransactionLogDto } from './create-amt_transaction_log.dto';

export class UpdateAmtTransactionLogDto extends PartialType(CreateAmtTransactionLogDto) {}
