import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum TransactionType {
  BANK = 'BANK',
  CASH = 'CASH',
}

export enum TransactionDebitCredit {
  DEBIT = 'DEBIT',
  CREDIT = 'CREDIT',
}

@Entity({ name: 'amt_transaction' })
export class AmtTransaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'transaction_type',
    type: 'enum',
    enum: TransactionType,
  })
  transactionType: TransactionType;

  @Column({
    name: 'transaction_deb_or_cred',
    type: 'enum',
    enum: TransactionDebitCredit,
  })
  transactionDebOrCred: TransactionDebitCredit;

  @Column({ name: 'transaction_id', type: 'varchar', length: 100 })
  transactionId: string;

  @Column({
    name: 'transaction_amount',
    type: 'decimal',
    precision: 12,
    scale: 2,
  })
  transactionAmount: number;

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
