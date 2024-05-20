import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import {
  CoverPhoto,
  CoverPhotoDomainFacade,
} from '@server/modules/coverPhoto/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { CoverPhotoApplicationEvent } from './coverPhoto.application.event'
import { CoverPhotoCreateDto, CoverPhotoUpdateDto } from './coverPhoto.dto'

@Controller('/v1/coverPhotos')
export class CoverPhotoController {
  constructor(
    private eventService: EventService,
    private coverPhotoDomainFacade: CoverPhotoDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.coverPhotoDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: CoverPhotoCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.coverPhotoDomainFacade.create(body)

    await this.eventService.emit<CoverPhotoApplicationEvent.CoverPhotoCreated.Payload>(
      CoverPhotoApplicationEvent.CoverPhotoCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:coverPhotoId')
  async findOne(
    @Param('coverPhotoId') coverPhotoId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.coverPhotoDomainFacade.findOneByIdOrFail(
      coverPhotoId,
      queryOptions,
    )

    return item
  }

  @Patch('/:coverPhotoId')
  async update(
    @Param('coverPhotoId') coverPhotoId: string,
    @Body() body: CoverPhotoUpdateDto,
  ) {
    const item =
      await this.coverPhotoDomainFacade.findOneByIdOrFail(coverPhotoId)

    const itemUpdated = await this.coverPhotoDomainFacade.update(
      item,
      body as Partial<CoverPhoto>,
    )
    return itemUpdated
  }

  @Delete('/:coverPhotoId')
  async delete(@Param('coverPhotoId') coverPhotoId: string) {
    const item =
      await this.coverPhotoDomainFacade.findOneByIdOrFail(coverPhotoId)

    await this.coverPhotoDomainFacade.delete(item)

    return item
  }
}
