// 실제 DATA 구조
export let people = [
    {
        id: 1,
        name: 'hj',
        age: 31,
        gender: 'male'
    },
    {
        id: 2,
        name: 'ys',
        age: 31,
        gender: 'male'
    },
    {
        id: 3,
        name: 'sy',
        age: 28,
        gender: 'female'
    },
    {
        id: 4,
        name: 'sh',
        age: 30,
        gender: 'male'
    }
]

// resolvers에 있는 Mutation이 직접 사용하는 함수들
export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id)
    return filteredPeople[0]
}

export const deleteById = id => {
    const cleanedPeople = people.filter(person => person.id !== id)
    if(people.length > cleanedPeople.length) {
        people = cleanedPeople
        return true;
    } else {
        return false;
    }
}

export const addPerson = (name, age, gender) => {
    const newPerson = {
        id: `${people.length + 1}`,
        name,
        age,
        gender
    };
    people.push(newPerson);
    return newPerson;
}