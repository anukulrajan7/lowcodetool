import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { PhotoDomainFacade } from '@server/modules/photo/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { PhotoApplicationEvent } from './photo.application.event'
import { PhotoCreateDto } from './photo.dto'

import { PostDataDomainFacade } from '../../postData/domain'

@Controller('/v1/postDatas')
export class PhotoByPostDataController {
  constructor(
    private postDataDomainFacade: PostDataDomainFacade,

    private photoDomainFacade: PhotoDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/post/:postId/photos')
  async findManyPostId(
    @Param('postId') postId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.postDataDomainFacade.findOneByIdOrFail(postId)

    const items = await this.photoDomainFacade.findManyByPost(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/post/:postId/photos')
  async createByPostId(
    @Param('postId') postId: string,
    @Body() body: PhotoCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, postId }

    const item = await this.photoDomainFacade.create(valuesUpdated)

    await this.eventService.emit<PhotoApplicationEvent.PhotoCreated.Payload>(
      PhotoApplicationEvent.PhotoCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
