import { User } from '../user'

import { Photo } from '../photo'

import { Like } from '../like'

import { Comment } from '../comment'

export class PostData {
  id: string

  content?: string

  type?: string

  userId?: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  photos?: Photo[]

  likes?: Like[]

  comments?: Comment[]
}
