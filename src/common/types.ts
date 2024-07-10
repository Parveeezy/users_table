export type RoleType = 'driver' | 'waiter' | 'cook'

export type UserType = {
    "id": number,
    "name": string,
    "isArchive": boolean,
    "role": RoleType,
    "phone": string,
    "birthday": Date
}

export type UsersType = UserType[]