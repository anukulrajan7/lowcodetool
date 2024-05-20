import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Photo } from './photo.model'

export class PhotoApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Photo>,
  ): Promise<Photo[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/photos${buildOptions}`)
  }

  static findOne(
    photoId: string,
    queryOptions?: ApiHelper.QueryOptions<Photo>,
  ): Promise<Photo> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/photos/${photoId}${buildOptions}`)
  }

  static createOne(values: Partial<Photo>): Promise<Photo> {
    return HttpService.api.post(`/v1/photos`, values)
  }

  static updateOne(photoId: string, values: Partial<Photo>): Promise<Photo> {
    return HttpService.api.patch(`/v1/photos/${photoId}`, values)
  }

  static deleteOne(photoId: string): Promise<void> {
    return HttpService.api.delete(`/v1/photos/${photoId}`)
  }

  static findManyByPostId(
    postId: string,
    queryOptions?: ApiHelper.QueryOptions<Photo>,
  ): Promise<Photo[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/postDatas/post/${postId}/photos${buildOptions}`,
    )
  }

  static createOneByPostId(
    postId: string,
    values: Partial<Photo>,
  ): Promise<Photo> {
    return HttpService.api.post(`/v1/postDatas/post/${postId}/photos`, values)
  }
}
