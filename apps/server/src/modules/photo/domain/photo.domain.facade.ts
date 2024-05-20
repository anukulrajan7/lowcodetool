import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Photo } from './photo.model'

import { PostData } from '../../postData/domain'

@Injectable()
export class PhotoDomainFacade {
  constructor(
    @InjectRepository(Photo)
    private repository: Repository<Photo>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Photo>): Promise<Photo> {
    return this.repository.save(values)
  }

  async update(item: Photo, values: Partial<Photo>): Promise<Photo> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Photo): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Photo> = {},
  ): Promise<Photo[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Photo> = {},
  ): Promise<Photo> {
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

  async findManyByPost(
    item: PostData,
    queryOptions: RequestHelper.QueryOptions<Photo> = {},
  ): Promise<Photo[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('post')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        postId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
