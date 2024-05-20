import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ProfilePictureDomainFacade } from '@server/modules/profilePicture/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ProfilePictureApplicationEvent } from './profilePicture.application.event'
import { ProfilePictureCreateDto } from './profilePicture.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class ProfilePictureByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private profilePictureDomainFacade: ProfilePictureDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/profilePictures')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.profilePictureDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/profilePictures')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: ProfilePictureCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.profilePictureDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ProfilePictureApplicationEvent.ProfilePictureCreated.Payload>(
      ProfilePictureApplicationEvent.ProfilePictureCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
