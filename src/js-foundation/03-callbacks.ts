interface User {
    id: number;
    name: string;
}


const users: User[] = [
    {
        id: 1,
        name: "Jahan Barraza"
    },
    {
        id: 2,
        name: "Samuel Garcia"
    }
]


export function getUserById(id: number, callback: (err?: string, user?:User)=> void ) {
    const user = users.find( function (user) {
        return user.id === id
    })

    if ( !user ) {
        return callback( `Usuario no encontrado con ${id}`)
    }
    return callback(undefined, user)
}


