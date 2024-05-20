import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { CoverPhotoDomainModule } from '../domain'
import { CoverPhotoController } from './coverPhoto.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { CoverPhotoByUserController } from './coverPhotoByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    CoverPhotoDomainModule,

    UserDomainModule,
  ],
  controllers: [CoverPhotoController, CoverPhotoByUserController],
  providers: [],
})
export class CoverPhotoApplicationModule {}
