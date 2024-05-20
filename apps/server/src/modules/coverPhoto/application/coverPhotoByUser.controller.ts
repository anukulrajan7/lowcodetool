import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { CoverPhotoDomainFacade } from '@server/modules/coverPhoto/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { CoverPhotoApplicationEvent } from './coverPhoto.application.event'
import { CoverPhotoCreateDto } from './coverPhoto.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class CoverPhotoByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private coverPhotoDomainFacade: CoverPhotoDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/coverPhotos')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.coverPhotoDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/coverPhotos')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: CoverPhotoCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.coverPhotoDomainFacade.create(valuesUpdated)

    await this.eventService.emit<CoverPhotoApplicationEvent.CoverPhotoCreated.Payload>(
      CoverPhotoApplicationEvent.CoverPhotoCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
