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

import { Group } from '../../../modules/group/domain'

@Entity()
export class GroupMembership {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  userId?: string

  @ManyToOne(() => User, parent => parent.groupMemberships)
  @JoinColumn({ name: 'userId' })
  user?: User

  @Column({ nullable: true })
  groupId?: string

  @ManyToOne(() => Group, parent => parent.groupMemberships)
  @JoinColumn({ name: 'groupId' })
  group?: Group

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
