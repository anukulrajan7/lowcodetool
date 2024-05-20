import { GroupMembership } from '../groupMembership'

export class Group {
  id: string

  name?: string

  description?: string

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  groupMemberships?: GroupMembership[]
}
