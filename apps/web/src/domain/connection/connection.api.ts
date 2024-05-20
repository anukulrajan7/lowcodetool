import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Connection } from './connection.model'

export class ConnectionApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Connection>,
  ): Promise<Connection[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/connections${buildOptions}`)
  }

  static findOne(
    connectionId: string,
    queryOptions?: ApiHelper.QueryOptions<Connection>,
  ): Promise<Connection> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/connections/${connectionId}${buildOptions}`)
  }

  static createOne(values: Partial<Connection>): Promise<Connection> {
    return HttpService.api.post(`/v1/connections`, values)
  }

  static updateOne(
    connectionId: string,
    values: Partial<Connection>,
  ): Promise<Connection> {
    return HttpService.api.patch(`/v1/connections/${connectionId}`, values)
  }

  static deleteOne(connectionId: string): Promise<void> {
    return HttpService.api.delete(`/v1/connections/${connectionId}`)
  }

  static findManyByRequesterId(
    requesterId: string,
    queryOptions?: ApiHelper.QueryOptions<Connection>,
  ): Promise<Connection[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/requester/${requesterId}/connections${buildOptions}`,
    )
  }

  static createOneByRequesterId(
    requesterId: string,
    values: Partial<Connection>,
  ): Promise<Connection> {
    return HttpService.api.post(
      `/v1/users/requester/${requesterId}/connections`,
      values,
    )
  }

  static findManyByReceiverId(
    receiverId: string,
    queryOptions?: ApiHelper.QueryOptions<Connection>,
  ): Promise<Connection[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/receiver/${receiverId}/connections${buildOptions}`,
    )
  }

  static createOneByReceiverId(
    receiverId: string,
    values: Partial<Connection>,
  ): Promise<Connection> {
    return HttpService.api.post(
      `/v1/users/receiver/${receiverId}/connections`,
      values,
    )
  }
}
