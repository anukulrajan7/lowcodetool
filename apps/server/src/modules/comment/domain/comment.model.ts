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

import { PostData } from '../../../modules/postData/domain'

@Entity()
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  content?: string

  @Column({ nullable: true })
  userId?: string

  @ManyToOne(() => User, parent => parent.comments)
  @JoinColumn({ name: 'userId' })
  user?: User

  @Column({ nullable: true })
  postId?: string

  @ManyToOne(() => PostData, parent => parent.comments)
  @JoinColumn({ name: 'postId' })
  post?: PostData

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
