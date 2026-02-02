import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Theater } from '../../theater/entities/theater.entity';
import { Screen } from '../../screen/entities/screen.entity';
import { SeatType } from '../../seat_type/entities/seat_type.entity';
import { TicketMaster } from '../../ticket_master/entities/ticket_master.entity';
export enum StatusTypes {
  AVAILABLE = 'AVAILABLE',
  HOLD = 'HOLD',
  BOOKED = 'BOOKED',
}
@Entity({ name: 'seat' })
export class Seat {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'theater_id', type: 'uuid' })
  theaterId: string;

  @ManyToOne(() => Theater, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'theater_id' })
  theater: Theater;

  @Column({ name: 'screen_id', type: 'uuid' })
  screenId: string;

  @ManyToOne(() => Screen, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'screen_id' })
  screen: Screen;

  @Column({ name: 'seat_type_id' })
  seatTypeId: string;

  @Column({
    name: 'status',
    type: 'enum',
    enum: StatusTypes,
    default: StatusTypes.AVAILABLE,
  })
  status: StatusTypes;

  @ManyToOne(() => SeatType)
  @JoinColumn({ name: 'seat_type_id' })
  seatType: SeatType;

  @CreateDateColumn({
    name: 'created_date',
    type: 'timestamptz',
  })
  createdDate: Date;

  @UpdateDateColumn({
    name: 'updated_date',
    type: 'timestamptz',
  })
  updatedDate: Date;

  @Column({
    name: 'created_by',
    nullable: true,
  })
  createdBy: string;

  @Column({
    name: 'updated_by',
    nullable: true,
  })
  updatedBy: string;

  @OneToMany(() => TicketMaster, (ticket) => ticket.seat)
  tickets: TicketMaster[];
}
