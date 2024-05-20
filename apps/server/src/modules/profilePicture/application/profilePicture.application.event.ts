export namespace ProfilePictureApplicationEvent {
  export namespace ProfilePictureCreated {
    export const key = 'profilePicture.application.profilePicture.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
