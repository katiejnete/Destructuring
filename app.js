// obj dest 1
// console.log(numPlanets) will print 8
// console.log(yearNeptuneDiscovered) will print 1846

// obj dest 2
// console.log(discoveryYears) will print {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// obj dest 3
// getUserData({firstName: "Alejandro", favoriteColor: "purple"}) => 'Your name is Alejandro and you like purple'
// getUserData({firstName: "Melissa"}) => 'Your name is Melissa and you like green'
// getUserData({}) =? 'Your name is undefined and you like green'

// arr dest 1
// console.log(first) => 'Maya'
// console.log(second) => 'Marisa'
// console.log(third) => 'Chi'

// arr dest 2
// console.log(raindrops); => 'Raindrops on roses'
// console.log(whiskers); => 'whiskers on kittens'
// console.log(aFewOfMyFavoriteThings); => ["Bright copper kettles","warm woolen mittens","Brown paper packages tied up with strings"]

// arr dest 3
// console.log(numbers) => [10, 30, 20];

// ES2015 refactoring
// ES2015 object destructuring
const obj = {numbers: {
    a: 1,
    b: 2
}};

const {numbers: {a, b}} = obj;

// ES2015 one-line array swap with destructuring
const numArr = [1, 2];
[numArr[0], numArr[1]] = [numArr[1], numArr[0]];

// raceResults()
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});


