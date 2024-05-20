import { User } from '../user'

export class CoverPhoto {
  id: string

  url?: string

  userId?: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
