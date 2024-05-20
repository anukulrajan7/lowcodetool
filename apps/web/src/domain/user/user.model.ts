import { Notification } from '../notification'

import { ProfilePicture } from '../profilePicture'

import { CoverPhoto } from '../coverPhoto'

import { PostData } from '../postData'

import { Like } from '../like'

import { Comment } from '../comment'

import { Connection } from '../connection'

import { GroupMembership } from '../groupMembership'

export enum UserStatus {
  CREATED = 'CREATED',
  VERIFIED = 'VERIFIED',
}
export class User {
  id: string
  email?: string
  status: UserStatus
  name?: string
  pictureUrl?: string
  password?: string
  dateCreated: string
  dateUpdated: string
  notifications?: Notification[]

  profilePictures?: ProfilePicture[]

  coverPhotos?: CoverPhoto[]

  posts?: PostData[]

  likes?: Like[]

  comments?: Comment[]

  connectionsAsRequester?: Connection[]

  connectionsAsReceiver?: Connection[]

  groupMemberships?: GroupMembership[]
}
