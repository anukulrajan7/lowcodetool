import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { ProfilePictureDomainFacade } from './profilePicture.domain.facade'
import { ProfilePicture } from './profilePicture.model'

@Module({
  imports: [TypeOrmModule.forFeature([ProfilePicture]), DatabaseHelperModule],
  providers: [ProfilePictureDomainFacade, ProfilePictureDomainFacade],
  exports: [ProfilePictureDomainFacade],
})
export class ProfilePictureDomainModule {}
