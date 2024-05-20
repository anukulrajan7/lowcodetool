import { User } from '../user'

export class Connection {
  id: string

  status?: string

  requesterId?: string

  requester?: User

  receiverId?: string

  receiver?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
