import { Test, TestingModule } from '@nestjs/testing';
import { TicketMasterController } from './ticket_master.controller';
import { TicketMasterService } from './ticket_master.service';

describe('TicketMasterController', () => {
  let controller: TicketMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TicketMasterController],
      providers: [TicketMasterService],
    }).compile();

    controller = module.get<TicketMasterController>(TicketMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
