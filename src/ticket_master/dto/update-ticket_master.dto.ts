import { PartialType } from '@nestjs/mapped-types';
import { CreateTicketMasterDto } from './create-ticket_master.dto';

export class UpdateTicketMasterDto extends PartialType(CreateTicketMasterDto) {}
