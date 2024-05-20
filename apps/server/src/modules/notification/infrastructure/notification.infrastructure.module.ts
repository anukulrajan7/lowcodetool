import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationProfilePictureSubscriber } from './subscribers/notification.profilePicture.subscriber'

import { NotificationCoverPhotoSubscriber } from './subscribers/notification.coverPhoto.subscriber'

import { NotificationPostDataSubscriber } from './subscribers/notification.postData.subscriber'

import { NotificationPhotoSubscriber } from './subscribers/notification.photo.subscriber'

import { NotificationLikeSubscriber } from './subscribers/notification.like.subscriber'

import { NotificationCommentSubscriber } from './subscribers/notification.comment.subscriber'

import { NotificationConnectionSubscriber } from './subscribers/notification.connection.subscriber'

import { NotificationGroupSubscriber } from './subscribers/notification.group.subscriber'

import { NotificationGroupMembershipSubscriber } from './subscribers/notification.groupMembership.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [
    NotificationProfilePictureSubscriber,

    NotificationCoverPhotoSubscriber,

    NotificationPostDataSubscriber,

    NotificationPhotoSubscriber,

    NotificationLikeSubscriber,

    NotificationCommentSubscriber,

    NotificationConnectionSubscriber,

    NotificationGroupSubscriber,

    NotificationGroupMembershipSubscriber,
  ],
  exports: [],
})
export class NotificationInfrastructureModule {}
