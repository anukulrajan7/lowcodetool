import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { User } from '../../../modules/user/domain'

@Entity()
export class Connection {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  status?: string

  @Column({ nullable: true })
  requesterId?: string

  @ManyToOne(() => User, parent => parent.connectionsAsRequester)
  @JoinColumn({ name: 'requesterId' })
  requester?: User

  @Column({ nullable: true })
  receiverId?: string

  @ManyToOne(() => User, parent => parent.connectionsAsReceiver)
  @JoinColumn({ name: 'receiverId' })
  receiver?: User

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
