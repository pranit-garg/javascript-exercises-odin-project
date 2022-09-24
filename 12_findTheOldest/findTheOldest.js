const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest;


    })
}

    const getAge = function(birth, death) {
        if (!death) {
            death = new Date().getFullYear();
        }
        return death - birth;
    }






// go through each item on the array and add each person's age to the object representing them
/* let personAndAge = [];

for (let i = 0; i < array.length; i++){
    let personAge = array[i]["yearOfDeath"] - array[i]["yearOfBirth"];
    array[i]["age"] = personAge;
}

for (let j = 0; j < array.length; j++) {
    let person = array[j];
    personAndAge.push([person.name, person.age]);
}

let sortedByAge = personAndAge.sort((a, b) => a[1] - b[1]);

let oldestPerson = sortedByAge[sortedByAge.length - 1][0];

return oldestPerson; */

findTheOldest([
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ])

// Do not edit below this line
module.exports = findTheOldest;
