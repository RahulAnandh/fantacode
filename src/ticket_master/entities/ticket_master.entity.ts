import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Theater } from '../../theater/entities/theater.entity';
import { Movie } from '../../movie/entities/movie.entity';
import { Screen } from '../../screen/entities/screen.entity';
import { Seat } from '../../seat/entities/seat.entity';
import { User } from '../../user/entities/user.entity';

@Entity({ name: 'ticket_master' })
export class TicketMaster {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'theater_id', type: 'uuid' })
  theaterId: string;

  @ManyToOne(() => Theater)
  @JoinColumn({ name: 'theater_id' })
  theater: Theater;

  @Column({ name: 'movie_id', type: 'uuid' })
  movieId: string;

  @ManyToOne(() => Movie)
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;

  @Column({ name: 'screen_id', type: 'uuid' })
  screenId: string;

  @ManyToOne(() => Screen)
  @JoinColumn({ name: 'screen_id' })
  screen: Screen;

  @Column({ name: 'seat_id', type: 'uuid' })
  seatId: string;

  @ManyToOne(() => Seat)
  @JoinColumn({ name: 'seat_id' })
  seat: Seat;

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

  @Column({ name: 'created_by' })
  createdBy: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'created_by' })
  createdByUser: User;

  @Column({ name: 'updated_by', nullable: true })
  updatedBy: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'updated_by' })
  updatedByUser: User;
}
