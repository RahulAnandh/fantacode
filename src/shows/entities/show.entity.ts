import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Movie } from '../../movie/entities/movie.entity';
import { Theater } from '../../theater/entities/theater.entity';
import { Screen } from '../../screen/entities/screen.entity';
import { User } from '../../user/entities/user.entity';

@Entity({ name: 'shows' })
export class Show {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ name: 'movie_id', type: 'uuid' })
  movieId: string;

  @ManyToOne(() => Movie)
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;

  @Column({ name: 'theater_id', type: 'uuid' })
  theaterId: string;

  @ManyToOne(() => Theater)
  @JoinColumn({ name: 'theater_id' })
  theater: Theater;

  @Column({ name: 'screen_id', type: 'uuid' })
  screenId: string;

  @ManyToOne(() => Screen)
  @JoinColumn({ name: 'screen_id' })
  screen: Screen;

  @Column({
    name: 'time_of_show',
    type: 'timestamptz',
  })
  timeOfShow: Date;

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
