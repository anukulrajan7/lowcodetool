import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Connection } from './connection.model'

import { User } from '../../user/domain'

@Injectable()
export class ConnectionDomainFacade {
  constructor(
    @InjectRepository(Connection)
    private repository: Repository<Connection>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Connection>): Promise<Connection> {
    return this.repository.save(values)
  }

  async update(
    item: Connection,
    values: Partial<Connection>,
  ): Promise<Connection> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Connection): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Connection> = {},
  ): Promise<Connection[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Connection> = {},
  ): Promise<Connection> {
    if (!id) {
      this.databaseHelper.invalidQueryWhere('id')
    }

    const queryOptionsEnsured = {
      includes: queryOptions?.includes,
      filters: {
        id: id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    const item = await query.getOne()

    if (!item) {
      this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters)
    }

    return item
  }

  async findManyByRequester(
    item: User,
    queryOptions: RequestHelper.QueryOptions<Connection> = {},
  ): Promise<Connection[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('requester')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        requesterId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

  async findManyByReceiver(
    item: User,
    queryOptions: RequestHelper.QueryOptions<Connection> = {},
  ): Promise<Connection[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('receiver')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        receiverId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
