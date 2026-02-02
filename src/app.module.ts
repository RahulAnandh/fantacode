import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AmtTransaction } from './amt_transaction/entities/amt_transaction.entity';
import { AmtTransactionLog } from './amt_transaction_log/entities/amt_transaction_log.entity';
import { Movie } from './movie/entities/movie.entity';
import { Screen } from './screen/entities/screen.entity';
import { Seat } from './seat/entities/seat.entity';
import { SeatType } from './seat_type/entities/seat_type.entity';
import { Show } from './shows/entities/show.entity';
import { Theater } from './theater/entities/theater.entity';
import { TicketMaster } from './ticket_master/entities/ticket_master.entity';
import { User } from './user/entities/user.entity';
import { TicketMasterModule } from './ticket_master/ticket_master.module';
import { TheaterModule } from './theater/theater.module';
import { MovieModule } from './movie/movie.module';
import { SeatTypeModule } from './seat_type/seat_type.module';
import { ScreenModule } from './screen/screen.module';
import { UserModule } from './user/user.module';
import { AmtTransactionModule } from './amt_transaction/amt_transaction.module';
import { AmtTransactionLogModule } from './amt_transaction_log/amt_transaction_log.module';
import { SeatModule } from './seat/seat.module';
import { ShowsModule } from './shows/shows.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'db_seat_booking',
      entities: [
        Show,
        Theater,
        TicketMaster,
        Movie,
        Seat,
        Screen,
        User,
        AmtTransaction,
        AmtTransactionLog,
        SeatType,
      ],
      synchronize: true, // auto-create tables in dev
    }),
    ShowsModule,
    TicketMasterModule,
    TheaterModule,
    MovieModule,
    SeatTypeModule,
    ScreenModule,
    UserModule,
    AmtTransactionModule,
    AmtTransactionLogModule,
    SeatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
