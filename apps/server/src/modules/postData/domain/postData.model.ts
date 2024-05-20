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

import { Photo } from '../../../modules/photo/domain'

import { Like } from '../../../modules/like/domain'

import { Comment } from '../../../modules/comment/domain'

@Entity()
export class PostData {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  content?: string

  @Column({ nullable: true })
  type?: string

  @Column({ nullable: true })
  userId?: string

  @ManyToOne(() => User, parent => parent.posts)
  @JoinColumn({ name: 'userId' })
  user?: User

  @OneToMany(() => Photo, child => child.post)
  photos?: Photo[]

  @OneToMany(() => Like, child => child.post)
  likes?: Like[]

  @OneToMany(() => Comment, child => child.post)
  comments?: Comment[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
