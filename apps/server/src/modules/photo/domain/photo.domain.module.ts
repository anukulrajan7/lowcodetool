import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { PhotoDomainFacade } from './photo.domain.facade'
import { Photo } from './photo.model'

@Module({
  imports: [TypeOrmModule.forFeature([Photo]), DatabaseHelperModule],
  providers: [PhotoDomainFacade, PhotoDomainFacade],
  exports: [PhotoDomainFacade],
})
export class PhotoDomainModule {}
