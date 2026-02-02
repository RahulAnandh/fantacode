import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TicketMasterService } from './ticket_master.service';
import { CreateTicketMasterDto } from './dto/create-ticket_master.dto';
import { UpdateTicketMasterDto } from './dto/update-ticket_master.dto';

@Controller('ticket-master')
export class TicketMasterController {
  constructor(private readonly ticketMasterService: TicketMasterService) {}

  @Post()
  create(@Body() createTicketMasterDto: CreateTicketMasterDto) {
    return this.ticketMasterService.create(createTicketMasterDto);
  }

  @Get()
  findAll() {
    return this.ticketMasterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketMasterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTicketMasterDto: UpdateTicketMasterDto) {
    return this.ticketMasterService.update(+id, updateTicketMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketMasterService.remove(+id);
  }
}
