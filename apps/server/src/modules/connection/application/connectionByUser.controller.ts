import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ConnectionDomainFacade } from '@server/modules/connection/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ConnectionApplicationEvent } from './connection.application.event'
import { ConnectionCreateDto } from './connection.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class ConnectionByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private connectionDomainFacade: ConnectionDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/requester/:requesterId/connections')
  async findManyRequesterId(
    @Param('requesterId') requesterId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(requesterId)

    const items = await this.connectionDomainFacade.findManyByRequester(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/requester/:requesterId/connections')
  async createByRequesterId(
    @Param('requesterId') requesterId: string,
    @Body() body: ConnectionCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, requesterId }

    const item = await this.connectionDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ConnectionApplicationEvent.ConnectionCreated.Payload>(
      ConnectionApplicationEvent.ConnectionCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/receiver/:receiverId/connections')
  async findManyReceiverId(
    @Param('receiverId') receiverId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(receiverId)

    const items = await this.connectionDomainFacade.findManyByReceiver(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/receiver/:receiverId/connections')
  async createByReceiverId(
    @Param('receiverId') receiverId: string,
    @Body() body: ConnectionCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, receiverId }

    const item = await this.connectionDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ConnectionApplicationEvent.ConnectionCreated.Payload>(
      ConnectionApplicationEvent.ConnectionCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
