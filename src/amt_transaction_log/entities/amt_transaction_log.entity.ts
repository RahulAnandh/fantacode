import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { AmtTransaction } from '../../amt_transaction/entities/amt_transaction.entity';

@Entity({ name: 'amt_transaction_log' })
export class AmtTransactionLog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'amt_transaction_id', type: 'uuid' })
  amtTransactionId: string;

  @ManyToOne(() => AmtTransaction, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'amt_transaction_id' })
  amtTransaction: AmtTransaction;

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
}
