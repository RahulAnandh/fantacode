import { Injectable } from '@nestjs/common';
import { CreateTicketMasterDto } from './dto/create-ticket_master.dto';
import { UpdateTicketMasterDto } from './dto/update-ticket_master.dto';

@Injectable()
export class TicketMasterService {
  create(createTicketMasterDto: CreateTicketMasterDto) {
    return 'This action adds a new ticketMaster';
  }

  findAll() {
    return `This action returns all ticketMaster`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ticketMaster`;
  }

  update(id: number, updateTicketMasterDto: UpdateTicketMasterDto) {
    return `This action updates a #${id} ticketMaster`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticketMaster`;
  }
}
