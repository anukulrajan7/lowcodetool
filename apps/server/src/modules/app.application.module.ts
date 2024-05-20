import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { ProfilePictureApplicationModule } from './profilePicture/application'

import { CoverPhotoApplicationModule } from './coverPhoto/application'

import { PostDataApplicationModule } from './postData/application'

import { PhotoApplicationModule } from './photo/application'

import { LikeApplicationModule } from './like/application'

import { CommentApplicationModule } from './comment/application'

import { ConnectionApplicationModule } from './connection/application'

import { GroupApplicationModule } from './group/application'

import { GroupMembershipApplicationModule } from './groupMembership/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { BillingApplicationModule } from './billing/application'
import { NotificationApplicationModule } from './notification/application/notification.application.module'
import { UploadApplicationModule } from './upload/application/upload.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,
    UploadApplicationModule,
    BillingApplicationModule,

    ProfilePictureApplicationModule,

    CoverPhotoApplicationModule,

    PostDataApplicationModule,

    PhotoApplicationModule,

    LikeApplicationModule,

    CommentApplicationModule,

    ConnectionApplicationModule,

    GroupApplicationModule,

    GroupMembershipApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}
