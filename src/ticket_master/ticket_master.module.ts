import { Module } from '@nestjs/common';
import { TicketMasterService } from './ticket_master.service';
import { TicketMasterController } from './ticket_master.controller';

@Module({
  controllers: [TicketMasterController],
  providers: [TicketMasterService],
})
export class TicketMasterModule {}
