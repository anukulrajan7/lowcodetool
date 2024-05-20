import { PostData } from '../postData'

export class Photo {
  id: string

  url?: string

  postId?: string

  post?: PostData

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
