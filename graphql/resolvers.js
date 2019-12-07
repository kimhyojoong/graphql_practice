import {people, getById, addPerson, deleteById} from './db'

const resolvers = {
    Query: {    // select
        people: () => people,
        person: (_, { id }) => getById(id)
    },
    Mutation: { // 기타 data를 다루는 method
        addPerson: (_, { name, age, gender }) => addPerson(name, age, gender),
        deleteById: (_, { id }) => deleteById(id)
    }
}

export default resolvers;