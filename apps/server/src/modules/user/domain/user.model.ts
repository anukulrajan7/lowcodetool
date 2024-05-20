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

import { Notification } from '../../../modules/notification/domain'

import { ProfilePicture } from '../../../modules/profilePicture/domain'

import { CoverPhoto } from '../../../modules/coverPhoto/domain'

import { PostData } from '../../../modules/postData/domain'

import { Like } from '../../../modules/like/domain'

import { Comment } from '../../../modules/comment/domain'

import { Connection } from '../../../modules/connection/domain'

import { GroupMembership } from '../../../modules/groupMembership/domain'

export enum UserStatus {
  VERIFIED = 'VERIFIED',
  CREATED = 'CREATED',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true, unique: true })
  email?: string

  @Column({ nullable: true })
  name?: string

  @Column({ nullable: true })
  pictureUrl?: string

  @Column({ nullable: true, select: false })
  stripeCustomerId?: string

  @Column({ nullable: true, select: false })
  password?: string

  @Column({ enum: UserStatus, default: UserStatus.VERIFIED })
  status: UserStatus

  @OneToMany(() => ProfilePicture, child => child.user)
  profilePictures?: ProfilePicture[]

  @OneToMany(() => CoverPhoto, child => child.user)
  coverPhotos?: CoverPhoto[]

  @OneToMany(() => PostData, child => child.user)
  posts?: PostData[]

  @OneToMany(() => Like, child => child.user)
  likes?: Like[]

  @OneToMany(() => Comment, child => child.user)
  comments?: Comment[]

  @OneToMany(() => Connection, child => child.requester)
  connectionsAsRequester?: Connection[]

  @OneToMany(() => Connection, child => child.receiver)
  connectionsAsReceiver?: Connection[]

  @OneToMany(() => GroupMembership, child => child.user)
  groupMemberships?: GroupMembership[]

  @OneToMany(() => Notification, notification => notification.user)
  notifications?: Notification[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
