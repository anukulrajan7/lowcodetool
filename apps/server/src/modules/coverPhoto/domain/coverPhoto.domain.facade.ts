import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { CoverPhoto } from './coverPhoto.model'

import { User } from '../../user/domain'

@Injectable()
export class CoverPhotoDomainFacade {
  constructor(
    @InjectRepository(CoverPhoto)
    private repository: Repository<CoverPhoto>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<CoverPhoto>): Promise<CoverPhoto> {
    return this.repository.save(values)
  }

  async update(
    item: CoverPhoto,
    values: Partial<CoverPhoto>,
  ): Promise<CoverPhoto> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: CoverPhoto): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<CoverPhoto> = {},
  ): Promise<CoverPhoto[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<CoverPhoto> = {},
  ): Promise<CoverPhoto> {
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

  async findManyByUser(
    item: User,
    queryOptions: RequestHelper.QueryOptions<CoverPhoto> = {},
  ): Promise<CoverPhoto[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('user')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        userId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
