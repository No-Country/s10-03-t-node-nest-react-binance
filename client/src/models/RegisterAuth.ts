export interface RegisterAuth {
  email?: string
  password: string
  username?: string
  balance?: number
  celphone?: number
}
// export interface GoogleAuth {
//   email?: string
//   displayName?: string,
//   photoURL?: string,
//   uid?: string,
//   token?: string
// }

export interface LoginAuth {
  userOrEmail: string
  password: string
}
