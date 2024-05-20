import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { ProfilePicture } from './profilePicture.model'

export class ProfilePictureApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<ProfilePicture>,
  ): Promise<ProfilePicture[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/profilePictures${buildOptions}`)
  }

  static findOne(
    profilePictureId: string,
    queryOptions?: ApiHelper.QueryOptions<ProfilePicture>,
  ): Promise<ProfilePicture> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/profilePictures/${profilePictureId}${buildOptions}`,
    )
  }

  static createOne(values: Partial<ProfilePicture>): Promise<ProfilePicture> {
    return HttpService.api.post(`/v1/profilePictures`, values)
  }

  static updateOne(
    profilePictureId: string,
    values: Partial<ProfilePicture>,
  ): Promise<ProfilePicture> {
    return HttpService.api.patch(
      `/v1/profilePictures/${profilePictureId}`,
      values,
    )
  }

  static deleteOne(profilePictureId: string): Promise<void> {
    return HttpService.api.delete(`/v1/profilePictures/${profilePictureId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<ProfilePicture>,
  ): Promise<ProfilePicture[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/profilePictures${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<ProfilePicture>,
  ): Promise<ProfilePicture> {
    return HttpService.api.post(
      `/v1/users/user/${userId}/profilePictures`,
      values,
    )
  }
}
