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

export const getUserById = (id:number, callback: (err?:string, user?:User)=> void ) => {
    const user = users.find((user) => user.id === id );

    ( user ) 
        ? callback(undefined, user)
        : callback( `Usuario no encontrado con ${id}`)
}
    






//function getUserById(id, callback){
//    const user = users.find( function (user) {
//        return user.id === id
 //   })

 //   if ( !user ) {
  //      return callback( `Usuario no encontrado con ${id}`)
  //  }
  //  return callback(null, user)
//}





