/*'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;


function logger() {
    console.log('My name is Jonas')
}

// calling /  running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice
}


const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);



// function declaration
// function calcAge1(birthYear) { 
//     return 2037 - birthYear;
// }

//const age1 = calcAge1(1991);
//console.log(age1)


//functon expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);

// console.log(age1, age2)

//The importance of functions declarations is that we can call the function before declaring it or defining it 
const age1 = calcAge1(1991);

function calcAge1(birthYear) { 
    return 2037 - birthYear;
}
console.log(age1);




// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);


// const yearsUntilRetirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement
// }

// console.log(yearsUntilRetirement(1991));

//two or more parenthesis
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));



function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice
}

console.log(fruitProcessor(2, 3));



//reviewing functions

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

        if(retirement > 0) {
            console.log(`${firstName} retires in ${retirement} years`);
            return retirement
        } else{
            console.log(`${firstName} has already retired.🏍`);
            return -1;
        }

    //return retirement
    //return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));



const calcAverage = (a, b, c) => (a + b + c) / 3;
//test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);


const checkWinner = function (avgDolphins, avgKoalas) {
    if(avgDolphins >= 2 * avgKoalas) {
        console.log(`Doplhins win the trophy ${avgDolphins} vs ${avgKoalas }`)
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win the trophy ${avgKoalas} vs ${avgDolphins}`)
    }else {
        console.log('No team wins...')
    }
}

checkWinner(scoreDolphins, scoreKoalas)
checkWinner(576, 111);

//test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);



const friend = 'Michael';
const friend2 =  'Steven';
const friend3 = 'Peter';



//dont use below array style
//const years = new Array(1991, 1984, 2000, 2020);

const friends = ['Michael', 'Steven', 'Peter'];


console.log(friends);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length)
console.log(friends[friends.length - 1]);

friends[2] = 'Jay'
console.log(friends);
//friends = ['Bob', 'Alice']


const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

//Exercise
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);



// add elements
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);


friends.unshift('John');
console.log(friends);



//remove elements
friends.pop();//last
const popped = friends.pop();
console.log(popped);
console.log(friends);


friends.shift(); //first
console.log(friends);


console.log(friends.indexOf('Steven')) ;
console.log(friends.indexOf('Bob'));

friends.push(23)
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));


if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}



const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}



const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(bills , tips, totals);



const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];



const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName'])

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas, 'last' + nameKey)


 const InterestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
console.log(jonas[InterestedIn]);

if(jonas[InterestedIn]){
    console.log(jonas[InterestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends')
}


jonas.location = 'Portugal';
jonas["twiter"] = '@jonasschemedtman';
console.log(jonas);


console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his bestfriend is called ${jonas.friends[0]}`)



const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function(birthYear){
    //     return 2037 - birthYear
    // }


    // calcAge: function(){
    //     // console.log(this)
    //     return 2037 - this.birthYear;
    // }


    calcAge: function(){
        this.age = 2037 - this.birthYear
        return this.age;
    },


    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has a ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    }
};

// console.log(jonas)


// console.log(jonas.calcAge());


// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);




// console.log(jonas["calcAge"](1991));
console.log(jonas.getSummary());
*/

// Coding Challenge #3
const Mark = {
    fullName : "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }
}


const John = {
    fullName : "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }
}


Mark.calcBMI();
John.calcBMI();
console.log(Mark.bmi, John.bmi);


if(Mark.bmi > John.bmi){
    console.log(`${Mark.fullName}'s BMI ${Mark.calcBMI()} is higher than ${John.fullName}'s ${John.calcBMI()}`)
}else{
    console.log(`${Mark.fullName}'s BMI ${Mark.calcBMI()} is less than ${John.fullName}'s ${John.calcBMI()}`)
}

