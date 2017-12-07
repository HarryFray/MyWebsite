

var person = {
  name : 'Sam',
  age : 25,
  hasPets : true
}

function getAllKeys(obj){
var  array = []
for( i in obj){
  array.push(i)
}
return array
}
//////////////////////////////////////////////////////////////////////
var vehicle = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]

function fromListToObject(array) {
  var newObj = {}
  array.forEach(function(current){
    newObj[current[0]] = current[1]
})
return newObj
}

/////////////////////////////////

var person = {
  name : 'Krysten',
  age : 33,
  hasPets : false
}

function listAllValues(obj) {
var  array = []
for( i in obj){
  array.push(obj.i)
}
return array
}

/////////////////////////////////////////

var employees = [
    [  ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [  ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]

function transformEmployeeData(masterArray) {
    var newArray = [];
    masterArray.forEach(function(object){
      var newObject = {};
      object.forEach(function(current){
        newObject[current[0]] = current[1];
    })
      newArray.push(newObject);
  })
    return newArray
};

/////////////////////////////////////////////////////

var dog = {
  species: 'canine',
  name: 'Bowser',
  weight: 45
}


function convertObjectToList(obj) {
  newList = []
  for(i in obj){
  newList.push([i,obj[i]])
}
return newList

}


////////////////////////////////////////////////////

var customerData = {
  'Joe': {
    visits: 0
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
 var visits = customerData[firstName].visits
 console.log(visits)
  switch(visits){
case 0:
    greeting ='Welcome! Is this your first time?'
    break;
case 1:
    greeting ='Welcome back, ' + firstName + '! We\'re glad you liked us the first time!'
    break;
default:
    greeting = 'Welcome back, ' + firstName + '! So glad to see you again!'
    break;
}
  return greeting;
}

/////////////////////////////////

var str = 'hey my name name my name is nick'

function countWords(str) {
  var wordCount = {};
  var words = str.split(' ');
  for (index in words){
    wordCount[words[index]] = 1
  }
return wordCount
}

countWords(str)


////////////////////////////////////////

var oobj1 = {
  a: 1,
  b: 2
};
var oobj2 = {
  b: 4,
  c: 3
};


function extend(obj1, obj2) {
  for(key in obj2){
    if (!(key in obj1)){
      obj1[key] = obj2[key]
    }
  }
  return obj1
}

extend(oobj1,oobj2)

///////////////////////////////////
var oobj = {
x: 10,
y: 1,
z: 2
};


function removeNumbersLargerThan(num, obj) {
  for ( key in obj){
    console.log(obj[key])
    if (obj[key] > num){
      delete obj[key]
    }
  }
  return obj
}

removeNumbersLargerThan(5,oobj)


/////////////////////////////////////


var oobj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};

function removeStringValuesLongerThan(num, obj) {
  for (key in obj){
    if( obj[key].length > num){
      delete obj[key]
    }
  }
  return obj
}

removeStringValuesLongerThan(10,oobj)


//////////////////////////////////

var input = [1, 2];
addToFrontOfNew(input, 3);


function addToFrontOfNew(arr, element) {
  debugger;
  var newArray = arr
  newArray.splice(0,0,element);
  return newArray
  console.log(arr)
}
