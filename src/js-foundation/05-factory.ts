
//const { getUUID } = require('../puglins/get-id-plugin')
//const { getAge } = require('../puglins/get-age-plugin')

interface BuildMakerPersonOptions {
    getUUID: () => string;
    getAge: (birthdate: string) => number
}

interface PersonOptions {
    name: string;
    birthdate: string;
}


export const buildMakePerson = ( {getUUID, getAge}: BuildMakerPersonOptions ) => {

    return ({name, birthdate}: PersonOptions) => {

        return {
            id: getUUID(),
            name,
            birthdate,
            age: getAge(birthdate)
        }
    }
}




//const obj = {name: 'Jahan', birthdate: '1985-03-01'}

//const jhon = buildPerson ( obj );

//console.log( jhon );

