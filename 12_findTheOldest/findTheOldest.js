const findTheOldest = function(array) {

    const getAge = function(birth, death) {
        if(!death) {
            death = new Date().getFullYear();
        }
        return death - birth;
    }

    return array.reduce((oldest, person) => {
        const oldestPerson = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentPerson = getAge(person.yearOfBirth, person.yearOfDeath);

        return (oldestPerson < currentPerson) ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
