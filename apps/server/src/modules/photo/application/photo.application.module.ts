import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { PhotoDomainModule } from '../domain'
import { PhotoController } from './photo.controller'

import { PostDataDomainModule } from '../../../modules/postData/domain'

import { PhotoByPostDataController } from './photoByPostData.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    PhotoDomainModule,

    PostDataDomainModule,
  ],
  controllers: [PhotoController, PhotoByPostDataController],
  providers: [],
})
export class PhotoApplicationModule {}
