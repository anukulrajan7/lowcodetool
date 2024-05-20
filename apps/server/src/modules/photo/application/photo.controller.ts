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
import { Photo, PhotoDomainFacade } from '@server/modules/photo/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { PhotoApplicationEvent } from './photo.application.event'
import { PhotoCreateDto, PhotoUpdateDto } from './photo.dto'

@Controller('/v1/photos')
export class PhotoController {
  constructor(
    private eventService: EventService,
    private photoDomainFacade: PhotoDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.photoDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: PhotoCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.photoDomainFacade.create(body)

    await this.eventService.emit<PhotoApplicationEvent.PhotoCreated.Payload>(
      PhotoApplicationEvent.PhotoCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:photoId')
  async findOne(@Param('photoId') photoId: string, @Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.photoDomainFacade.findOneByIdOrFail(
      photoId,
      queryOptions,
    )

    return item
  }

  @Patch('/:photoId')
  async update(
    @Param('photoId') photoId: string,
    @Body() body: PhotoUpdateDto,
  ) {
    const item = await this.photoDomainFacade.findOneByIdOrFail(photoId)

    const itemUpdated = await this.photoDomainFacade.update(
      item,
      body as Partial<Photo>,
    )
    return itemUpdated
  }

  @Delete('/:photoId')
  async delete(@Param('photoId') photoId: string) {
    const item = await this.photoDomainFacade.findOneByIdOrFail(photoId)

    await this.photoDomainFacade.delete(item)

    return item
  }
}
