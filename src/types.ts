export interface User {
  name: string
  avatar: string
  did: string
}

export interface AreaType {
  name: string
  carbonMultiplier?: number
}

export interface Area {
  did: string
  image: string
  name: string
  description: string
  owner: User
  type: AreaType
  size: number
  carbon: number
  trees: string[]
}
