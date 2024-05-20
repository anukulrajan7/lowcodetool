export namespace PhotoApplicationEvent {
  export namespace PhotoCreated {
    export const key = 'photo.application.photo.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
