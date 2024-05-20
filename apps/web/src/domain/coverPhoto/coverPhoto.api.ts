import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { CoverPhoto } from './coverPhoto.model'

export class CoverPhotoApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<CoverPhoto>,
  ): Promise<CoverPhoto[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/coverPhotos${buildOptions}`)
  }

  static findOne(
    coverPhotoId: string,
    queryOptions?: ApiHelper.QueryOptions<CoverPhoto>,
  ): Promise<CoverPhoto> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/coverPhotos/${coverPhotoId}${buildOptions}`)
  }

  static createOne(values: Partial<CoverPhoto>): Promise<CoverPhoto> {
    return HttpService.api.post(`/v1/coverPhotos`, values)
  }

  static updateOne(
    coverPhotoId: string,
    values: Partial<CoverPhoto>,
  ): Promise<CoverPhoto> {
    return HttpService.api.patch(`/v1/coverPhotos/${coverPhotoId}`, values)
  }

  static deleteOne(coverPhotoId: string): Promise<void> {
    return HttpService.api.delete(`/v1/coverPhotos/${coverPhotoId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<CoverPhoto>,
  ): Promise<CoverPhoto[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/coverPhotos${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<CoverPhoto>,
  ): Promise<CoverPhoto> {
    return HttpService.api.post(`/v1/users/user/${userId}/coverPhotos`, values)
  }
}
