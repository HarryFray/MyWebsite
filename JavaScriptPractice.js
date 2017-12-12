

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
  var newArray = arr.slice(0,arr.length)
  newArray.splice(0,0,element);
  return newArray
}


//////////////////////////////////


var output = getIndexOf('a', 'I am a hacker');

function getIndexOf(char, str) {
  debugger;
  for (index in str){
    if (str[index] === char){
      return Number(index)
    }
  }
  return -1
}


//////////////////////////////////////////
findMinLengthOfThreeWords('a','aa','aaa')

function findMinLengthOfThreeWords(word1, word2, word3) {
  var LW1 = word1.lenght
  var LW2 = word2.length
  var LW3 = word3.length
  if( LW1 < LW2 && LW1 < LW3){
    return LW1
  }else{
    LW2 < LW3 ? LW2:LW3
  }
}



/////////////////////////////////////



var obj = {
  blue: [1000, 10, 50, 10, 10],
  key: 'dBag'
};

getElementsThatEqual10AtProperty(obj,blue)

function getElementsThatEqual10AtProperty(obj, key) {
  var theKey = obj.key
  var elementsThatEqual10 = []
  for( index in theKey){
    if (theKey[index] === 10){
      elementsThatEqual10.push(theKey[index]);
    }
  }
  return elementsThatEqual10
}


///////////////////////////////////


var oarr = ['a', 'c', 'e','k'];
var oobj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 10
};

select(oarr,oobj)

function select(arr, obj) {
  newObj = {}
  for (letter in arr){
    if (arr[letter] in obj){
      newObj[arr[letter]] = obj[arr[letter]]
    }
  }
  return newObj
}

//////////////////////////////////////

var obj = {
  key: [1000, 20, 50, 500]
};

arr.forEach(function(element) {
    console.log(element);


getElementsLessThan100AtProperty(obj,key)

function getElementsLessThan100AtProperty(obj, key) {
  var ElementsLessThan100 = []
  obj.key.forEach(current){
    if (current < 100){
      ElementsLessThan100.push(current)
    }
  }
}

//////////////////////////////////

countAllCharacters('banana');

function countAllCharacters(str) {
  var objChar = {}
  for (index in str){
    if(str[index] in objChar){
      objChar[str[index]] += 1
    }else{
      objChar[str[index]] = 1
    }
  }
  return objChar
}
////////////////////////////////////////

var obj = {
  key: [1, 20, 30, 100, 15, 5, 3]
};

getElementsGreaterThan10AtProperty(obj, 'key')

function getElementsGreaterThan10AtProperty(obj, key) {
    var elementsGreaterThan10 = []
    for (index in obj['key']){
      if (obj['key'][index] > 10){
        elementsGreaterThan10.push(obj['key'][index])
      }
    }
    return elementsGreaterThan10
}

///////////////////////////////

removeElement([1, 2, 3, 2, 1], 2);

function removeElement(array, discarder) {
  var elementsSaved = [];
  array.forEach(function(num){
    if (num !== discarder){
      elementsSaved.push(num)
    }
})
return elementsSaved
}

////////////////////////////

var obj = {
  key: [1, 2, 4]
};
getFirstElementOfProperty(obj, 'key');

function getFirstElementOfProperty(obj, key) {
  return obj[key][0]

}

/////////////////////////////////////

var obj = {
  key: [1, 2, 5]
};
getLastElementOfProperty(obj, 'key');

function getLastElementOfProperty(obj, key) {
  if (typeof(obj[key]) === 'object'){
    return obj[key][((obj[key]).length)]
  }

}

//////////////////////////////////////////////

var obj = {
  key: ['It', 'has', 'some', 'words']
};
getOddLengthWordsAtProperty(obj, 'key');

function getOddLengthWordsAtProperty(obj, key) {
  var oddLengthWords = [];
  var allWords = obj[key];
  allWords.forEach(function(word){
    if( word.length % 2 !== 0){
      oddLengthWords.push(word)
    }
  })
  return oddLengthWords
}

///////////////////////////////////////////


var obj = {
  key: [1, 2, 3]
};
getAverageOfElementsAtProperty(obj, 'key');

function getAverageOfElementsAtProperty(obj, key) {
  var elements = obj[key];
  var sum = 0;
  if (typeof(elements) !== 'object'){
    return 0
  }else{
    elements.forEach(function(num){
      sum += num;
    })
    return sum / (elements.length)
    }
  }



  ///////////////////////


  var obj = {
  key: [1000, 20, 50, 500]
};
getElementsLessThan100AtProperty(obj, 'key');

function getElementsLessThan100AtProperty(obj, key) {
  var elements = obj[key];
  var elementsLessThan100 = [];
  elements.forEach(function(element){
    if (element < 100){
      elementsLessThan100.push(element)
    }
  })
  if (typeof(elements) !== 'object'){
    return []
  }else{
    return elementsLessThan100
  }
}

////////////////////////////////////



var obj = {
  key: ['a', 'long', 'game']
};
getEvenLengthWordsAtProperty(obj, 'key');

function getEvenLengthWordsAtProperty(obj, key) {
  var words = obj[key];
  var evenWords = []
  if( typeof(words) !== 'object' || words === []){
    return evenWords
  }else{
    words.forEach(function(word){
      if(word.length % 2 === 0){
        evenWords.push(word)
      }
    })
    return evenWords
  }
}



///////////////////////////////////////


var obj = {
  key: [2, 1, 5]
};

getSquaredElementsAtProperty(obj, 'key');


function getSquaredElementsAtProperty(obj, key) {
  var squaredElements = [];
  var elements = obj[key]
  if (typeof(elements) !== 'object'){
    return squaredElements
  }else{
    elements.forEach(function(num){
      squaredElements.push(num ** 2);
    })
  }
return squaredElements
}


////////////////////////

var obj = {
  key: [1, 2, 3, 4, 5]
};
getOddElementsAtProperty(obj, 'key');


function getOddElementsAtProperty(obj, key) {
  var elements = obj[key];
  var oddElements = [];
  if (typeof(elements) !== 'object'){
    return oddElements
  }else{
    elements.forEach(function(num){
      if( num % 2 !== 0 ){
        oddElements.push(num)
      }
    })
    return oddElements
  }
}

///////////////////////


getLengthOfLongestElement(['one', 'two', 'three']);


function getLengthOfLongestElement(arr) {
  var maxVal = 0
  if (arr.length === 0){
    return 0
  }else{
    arr.forEach(function(word){
      if(word.length > maxVal){
        maxVal = word.length
      }
    })
  }
 return maxVal
}


////////////////////////

var obj = {
  key: [2, 1, 5]
};

getSmallestElementAtProperty(obj, 'key');


function getSmallestElementAtProperty(obj, key) {

  var smallestElement = 0;
  var elements = obj[key];
  if (elements.length === 0 || typeof(elements) !== 'object'){
    return undefined
  }else{
    elements.forEach(function(num){
      if (num < smallestElement || smallestElement === 0){
        smallestElement = num
      }
    })
  }
  return smallestElement
}

/////////////////////////////////////

joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);

function joinArrayOfArrays(arr) {
  var joined = [];
  for(var i = 0; i < arr.length; i++){
    joined = joined.concat(arr[i])
  }
  return joined
}

//////////////////////////////////


findShortestWordAmongMixedElements([4, 'two','a', 2, 'three']);


function findShortestWordAmongMixedElements(arr) {
  arr.forEach(function(current){
    if(arr.length !== 0 && typeof(current) === 'string'){
      shortest = 'current'
    }else{
      return []
    }
  })
  for(i = 0; i < arr.length; i++){
    var lenElement = arr[i].length
    var shortLen = shortest.length
    if (typeof(arr[i]) === 'string' && lenElement < shortLen && shortLen !== lenElement){
      shortest = arr[i]
    }
  }
  return shortest
}
