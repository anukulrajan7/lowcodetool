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
  ProfilePicture,
  ProfilePictureDomainFacade,
} from '@server/modules/profilePicture/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { ProfilePictureApplicationEvent } from './profilePicture.application.event'
import {
  ProfilePictureCreateDto,
  ProfilePictureUpdateDto,
} from './profilePicture.dto'

@Controller('/v1/profilePictures')
export class ProfilePictureController {
  constructor(
    private eventService: EventService,
    private profilePictureDomainFacade: ProfilePictureDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.profilePictureDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: ProfilePictureCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.profilePictureDomainFacade.create(body)

    await this.eventService.emit<ProfilePictureApplicationEvent.ProfilePictureCreated.Payload>(
      ProfilePictureApplicationEvent.ProfilePictureCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:profilePictureId')
  async findOne(
    @Param('profilePictureId') profilePictureId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.profilePictureDomainFacade.findOneByIdOrFail(
      profilePictureId,
      queryOptions,
    )

    return item
  }

  @Patch('/:profilePictureId')
  async update(
    @Param('profilePictureId') profilePictureId: string,
    @Body() body: ProfilePictureUpdateDto,
  ) {
    const item =
      await this.profilePictureDomainFacade.findOneByIdOrFail(profilePictureId)

    const itemUpdated = await this.profilePictureDomainFacade.update(
      item,
      body as Partial<ProfilePicture>,
    )
    return itemUpdated
  }

  @Delete('/:profilePictureId')
  async delete(@Param('profilePictureId') profilePictureId: string) {
    const item =
      await this.profilePictureDomainFacade.findOneByIdOrFail(profilePictureId)

    await this.profilePictureDomainFacade.delete(item)

    return item
  }
}
