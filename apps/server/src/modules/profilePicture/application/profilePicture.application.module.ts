import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { ProfilePictureDomainModule } from '../domain'
import { ProfilePictureController } from './profilePicture.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { ProfilePictureByUserController } from './profilePictureByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    ProfilePictureDomainModule,

    UserDomainModule,
  ],
  controllers: [ProfilePictureController, ProfilePictureByUserController],
  providers: [],
})
export class ProfilePictureApplicationModule {}
