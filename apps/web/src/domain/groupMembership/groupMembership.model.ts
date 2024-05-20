import { User } from '../user'

import { Group } from '../group'

export class GroupMembership {
  id: string

  userId?: string

  user?: User

  groupId?: string

  group?: Group

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
