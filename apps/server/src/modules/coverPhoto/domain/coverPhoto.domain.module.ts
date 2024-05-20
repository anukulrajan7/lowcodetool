import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { CoverPhotoDomainFacade } from './coverPhoto.domain.facade'
import { CoverPhoto } from './coverPhoto.model'

@Module({
  imports: [TypeOrmModule.forFeature([CoverPhoto]), DatabaseHelperModule],
  providers: [CoverPhotoDomainFacade, CoverPhotoDomainFacade],
  exports: [CoverPhotoDomainFacade],
})
export class CoverPhotoDomainModule {}
