export namespace CoverPhotoApplicationEvent {
  export namespace CoverPhotoCreated {
    export const key = 'coverPhoto.application.coverPhoto.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
