import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { GroupMembershipDomainModule } from '../domain'
import { GroupMembershipController } from './groupMembership.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { GroupMembershipByUserController } from './groupMembershipByUser.controller'

import { GroupDomainModule } from '../../../modules/group/domain'

import { GroupMembershipByGroupController } from './groupMembershipByGroup.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    GroupMembershipDomainModule,

    UserDomainModule,

    GroupDomainModule,
  ],
  controllers: [
    GroupMembershipController,

    GroupMembershipByUserController,

    GroupMembershipByGroupController,
  ],
  providers: [],
})
export class GroupMembershipApplicationModule {}
