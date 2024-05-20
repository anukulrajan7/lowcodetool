import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'
import {
  BillingPayment as BillingPaymentModel,
  BillingProduct as BillingProductModel,
  BillingSubscription as BillingSubscriptionModel,
} from './billing/billing.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { ProfilePicture as ProfilePictureModel } from './profilePicture/profilePicture.model'

import { CoverPhoto as CoverPhotoModel } from './coverPhoto/coverPhoto.model'

import { PostData as PostDataModel } from './postData/postData.model'

import { Photo as PhotoModel } from './photo/photo.model'

import { Like as LikeModel } from './like/like.model'

import { Comment as CommentModel } from './comment/comment.model'

import { Connection as ConnectionModel } from './connection/connection.model'

import { Group as GroupModel } from './group/group.model'

import { GroupMembership as GroupMembershipModel } from './groupMembership/groupMembership.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}
  export class BillingProduct extends BillingProductModel {}
  export class BillingPayment extends BillingPaymentModel {}
  export class BillingSubscription extends BillingSubscriptionModel {}

  export class User extends UserModel {}

  export class Notification extends NotificationModel {}

  export class ProfilePicture extends ProfilePictureModel {}

  export class CoverPhoto extends CoverPhotoModel {}

  export class PostData extends PostDataModel {}

  export class Photo extends PhotoModel {}

  export class Like extends LikeModel {}

  export class Comment extends CommentModel {}

  export class Connection extends ConnectionModel {}

  export class Group extends GroupModel {}

  export class GroupMembership extends GroupMembershipModel {}
}
