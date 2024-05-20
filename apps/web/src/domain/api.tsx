import { AiApi } from './ai/ai.api'
import { AuthenticationApi } from './authentication/authentication.api'
import { AuthorizationApi } from './authorization/authorization.api'
import { BillingApi } from './billing/billing.api'
import { UploadApi } from './upload/upload.api'

import { UserApi } from './user/user.api'

import { NotificationApi } from './notification/notification.api'

import { ProfilePictureApi } from './profilePicture/profilePicture.api'

import { CoverPhotoApi } from './coverPhoto/coverPhoto.api'

import { PostDataApi } from './postData/postData.api'

import { PhotoApi } from './photo/photo.api'

import { LikeApi } from './like/like.api'

import { CommentApi } from './comment/comment.api'

import { ConnectionApi } from './connection/connection.api'

import { GroupApi } from './group/group.api'

import { GroupMembershipApi } from './groupMembership/groupMembership.api'

export namespace Api {
  export class Ai extends AiApi {}
  export class Authentication extends AuthenticationApi {}
  export class Authorization extends AuthorizationApi {}
  export class Billing extends BillingApi {}
  export class Upload extends UploadApi {}

  export class User extends UserApi {}

  export class Notification extends NotificationApi {}

  export class ProfilePicture extends ProfilePictureApi {}

  export class CoverPhoto extends CoverPhotoApi {}

  export class PostData extends PostDataApi {}

  export class Photo extends PhotoApi {}

  export class Like extends LikeApi {}

  export class Comment extends CommentApi {}

  export class Connection extends ConnectionApi {}

  export class Group extends GroupApi {}

  export class GroupMembership extends GroupMembershipApi {}
}
