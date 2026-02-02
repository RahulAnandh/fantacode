import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { TicketMaster } from '../../ticket_master/entities/ticket_master.entity';

@Entity({ name: 'theater' })
export class Theater {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ name: 'location_name', type: 'varchar', length: 255 })
  locationName: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 6,
  })
  lat: number;

  @Column({
    name: 'long',
    type: 'decimal',
    precision: 10,
    scale: 6,
  })
  long: number;

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
