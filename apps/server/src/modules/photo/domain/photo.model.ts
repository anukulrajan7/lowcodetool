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

import { PostData } from '../../../modules/postData/domain'

@Entity()
export class Photo {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  url?: string

  @Column({ nullable: true })
  postId?: string

  @ManyToOne(() => PostData, parent => parent.photos)
  @JoinColumn({ name: 'postId' })
  post?: PostData

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
