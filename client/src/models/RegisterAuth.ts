export interface RegisterAuth {
  email?: string
  password: string
  username?: string
  balance?: number
  celphone?: number
}

export interface LoginAuth {
  userOrEmail: string
  password: string
}
