/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function () {
    console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/


// more OOP approach
var holidayCalculators = {
    stepOnePercentage: this.stepOnePercentage,
    stepTwoPercentage: this.stepTwoPercentage,
    stepThreePercentage: this.stepThreePercentage,
    calculateTip: function (bill, stepOne, stepTwo) {
        var tip = 0;
        if (stepOne) {
            tip = bill * this.stepOnePercentage;
        } else if (stepTwo) {
            tip = bill * this.stepTwoPercentage;
        } else {
            tip = bill * this.stepThreePercentage;
        }
        return tip;
    },

    calculateAllTipsAndAmounts: function (bills) {
        var tips = [];
        var paidAmounts = [];
        var tipsAndAmounts = [];
        for (var i = 0; i < bills.length; i++) {
            var tip = this.calculateTip(bills[i]);
            tips.push(tip);
            paidAmounts.push(bills[i] + tip);
        };
        tipsAndAmounts.push(tips, paidAmounts);
        return tipsAndAmounts;
    }
}

var FamilyHolidays = function (name, bill, bills, testTipStepOne, testTipStepTwo, stepOnePercentage, stepTwoPercentage, stepThreePercentage) {
    this.name = name;
    this.bill = bill;
    this.bills = bills;
    this.testTipStepOne = testTipStepOne;
    this.testTipStepTwo = testTipStepTwo;
    this.stepOnePercentage = stepOnePercentage;
    this.stepTwoPercentage = stepTwoPercentage;
    this.stepThreePercentage = stepThreePercentage;
    // Attaching methods to object instances "gives" to instances its own methods' copies => MORE TIME PROCESSING => LESS EFFICIENT!!
    // this.presentation = function () {
    //     console.log('Those are the ' + this.name + ' Holidays');

    // };
}

// Attaching methods to constructor's prototype is MORE EFFICIENT because only one version of the method exists
// Just like it happens with Object.prototype => all objects inherit its methods without copying them
// Also methods are ACCESSIBLE TO BE MODIFIED
// IS BEST PRACTICE FOR PERFORMANCE AND READABILITY => properties defined inside the constructor, methods in separate "prototype blocks"
FamilyHolidays.prototype.presentation =
    function () {
        console.log('Those are the ' + this.name + ' Holidays');
    };

var johnFamilyHolidays = new FamilyHolidays('The Smiths', 0, [124, 48, 268, 180, 42], (this.bill < 50), (this.bill >= 50 && this.bill <= 200), 0.2, 0.15, 0.1);
var markFamilyHolidays = new FamilyHolidays('The Millers', 0, [77, 375, 110, 45], (this.bill < 100), (this.bill >= 100 && this.bill <= 300), 0.2, 0.1, 0.25);



console.log(johnFamilyHolidays.bills[0]);

console.log(holidayCalculators.calculateTip(johnFamilyHolidays.bills[0], johnFamilyHolidays.testTipStepOne, johnFamilyHolidays.testTipStepTwo));
console.log(holidayCalculators.calculateAllTipsAndAmounts(johnFamilyHolidays.bills));
johnFamilyHolidays.presentation();

console.log(markFamilyHolidays.bills[0]);

console.log(holidayCalculators.calculateTip(markFamilyHolidays.bills[0], markFamilyHolidays.testTipStepOne, markFamilyHolidays.testTipStepTwo));
console.log(holidayCalculators.calculateAllTipsAndAmounts(markFamilyHolidays.bills));
markFamilyHolidays.presentation();

/*

var tipAverage = function (familyHolidays) {
    var tips = familyHolidays.calculateAllTips();
    var sumTips = 0;
    for (var i = 0; i < tips.length; i++) {
        sumTips += tips[i];
    }
    return sumTips / tips.length;
}

var whoSpentMoreInTips = function (firstFamily, secondFamily) {
    if (tipAverage(firstFamily) > tipAverage(secondFamily)) {
        console.log(firstFamily.name + ' spent an average of ' + tipAverage(firstFamily) + '$');
    } else if (tipAverage(firstFamily) < tipAverage(secondFamily)) {
        console.log(secondFamily.name + ' spent an average of ' + tipAverage(secondFamily) + '$');

    } else {
        console.log('Both ' + firstFamily.name + ' and ' + secondFamily.name + ' spent an average of ' + tipAverage(firstFamily) + '$');
    }
    return;
}

whoSpentMoreInTips(johnFamilyHolidays, markFamilyHolidays);

whoSpentMoreInTips(markFamilyHolidays, markFamilyHolidays);



/////////////////////////////
// Lecture: Passing functions as arguments
/*

var years = [1990, 1965, 1937, 2005, 1998];

function arrayMapping(array, callback) {
    var arrayResult = [];
    for (var i = 0; i < array.length; i++) {
        arrayResult.push(callback(array[i]));
    }
    return arrayResult;
}

function calculateAge(element) {
    return 2016 - element;
}

function isFullAge(element) {
    return element >= 18;
}

function maxHeartRate(element) {
    if (element >= 18 && element <= 81) {
        return Math.round(206.9 - (0.67 * element));
    } else {
        return -1;
    }
}


var ages = arrayMapping(years, calculateAge);
var fullAges = arrayMapping(ages, isFullAge);
var rates = arrayMapping(ages, maxHeartRate);

var agesMapped = years.map(calculateAge);
var ratesMapped = agesMapped.map(maxHeartRate);

console.log(ages);
console.log(rates);
console.log(agesMapped);
console.log(ratesMapped);

*/

/////////////////////////////
// Lecture: Functions returning functions

/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function (name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');


teacherQuestion('John');
designerQuestion('John');
designerQuestion('jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');
*/

/*
function operateWithValue(value1) {
    var closured = 'CLOSURED FOR ALL!'
    if (typeof value1 === 'string') {
        var closured = 'CLOSURED FOR STRING!'
        return function (value2, value3) {
            console.log(closured);
            if (typeof value3 === 'string' && typeof value2 === 'string') {
                console.log('I\'m going to CONCATENATE it like this: ' + value1 + ' ' + value2 + ' ' + value3);
            } else {
                console.log('I\'m going to COERCE it like this: ' + value1 + ' ' + value2 + ' ' + value3);
            }
        };
    } else if (typeof value1 === 'number') {
        // var closured = 'CLOSURED FOR NUMBER!'
        var result = 0;
        return function (value2, value3) {
            console.log(closured);
            if (typeof value3 === 'number' && typeof value2 === 'number') {
                result = value1 + value2 + value3;
                console.log('I\'m going to SUM it like this: ' + result);
            } else {
                result = value1 + value2 + value3;
                console.log('I can COERCE AND CONCATENATE it like this: ' + result + '. So now the type for result is ' + (typeof result));
                result = value1 + parseInt(value2) + parseInt(value3);
                console.log('Because if I want to SUM and obtain ' + result + ' I have to parse the strings y order to keep the type ' + (typeof result));
            }
        };
    } else {
        return function (value2, value3) {
            console.log((typeof value1) + ' ' + (typeof value2) + ' ' + (typeof value3) + ' = This is out of scope for me!')
        };
    }
};

// operateWithValue('Ésto')('son', 'strings');
// operateWithValue('Te hago la')(13, 14);
// operateWithValue(11)(13, 14);
// operateWithValue(11)('13', '14');
// operateWithValue(false)('13', '14');

var operateWithString = operateWithValue('Hola');
operateWithString('soy', 'yo');
operateWithString(100, -100);
var operateWithNumber = operateWithValue(1);
operateWithNumber(2, 3);
operateWithNumber('2', '3');

*/
//////// CLOSURES
/*
function interviewQuestion(job) {
    var designerSentence = ', can you please explain what UX design is?';
    var teacherSentence = 'What subject do you teach, ';
    var elseSentence = ', what do you do as the ';
    return function (name) {
        if (job === 'designer') {
            console.log(name + ' ' + job + designerSentence);
        } else if (job === 'teacher') {
            console.log(teacherSentence + name + ' ' + job + ' ?');
        } else {
            console.log('Hello ' + name + elseSentence + job + ' that you are?');
        }
    }
}

interviewQuestion('teacher')('Mark');
interviewQuestion('designer')('John');
interviewQuestion('astronaut')('Mr. Armstrong');
*/

/////////////////////////////
// Lecture: IIFE
/*

(function () {
    var score = Math.random() * 10;
    console.log(score);
    console.log(score >= 5);
})();

//console.log(score);


(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score);
    console.log(score >= 5 - goodLuck);
})(3);

*/


// Another cool example
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/