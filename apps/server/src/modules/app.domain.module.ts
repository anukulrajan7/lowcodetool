import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { ProfilePictureDomainModule } from './profilePicture/domain'

import { CoverPhotoDomainModule } from './coverPhoto/domain'

import { PostDataDomainModule } from './postData/domain'

import { PhotoDomainModule } from './photo/domain'

import { LikeDomainModule } from './like/domain'

import { CommentDomainModule } from './comment/domain'

import { ConnectionDomainModule } from './connection/domain'

import { GroupDomainModule } from './group/domain'

import { GroupMembershipDomainModule } from './groupMembership/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

    ProfilePictureDomainModule,

    CoverPhotoDomainModule,

    PostDataDomainModule,

    PhotoDomainModule,

    LikeDomainModule,

    CommentDomainModule,

    ConnectionDomainModule,

    GroupDomainModule,

    GroupMembershipDomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
