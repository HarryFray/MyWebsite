/*
This is a variation of the "Fashion Inventory" problem.

Please DO NOT paste code from before, however. Tackle each problem on its own.

It's the same inventory data structure:
*/
var inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive laced suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

/*
The task now is to find all the laced shoes.
Output shoe names that contain "lace" in them, and indicate which word contains "lace".

The output format should be structured like this:

[
  {
    "nameWords": [
      "tasselled",
      "black",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "tasselled",
      "green",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "red",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  },
  {
    "nameWords": [
      "black",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  }
]

Assert the validity of the values and structure of your output.

*/
lacedShoes(inventory)

function lacedShoes(inventory){
  var lacedShoes = []
  inventory.forEach(function(element){
    element.shoes.forEach(function(shoe){
      var shoeInfo = areLacedLocation(shoe.name)
      if(shoeInfo[0]){
        lacedShoes.push({'nameWords':shoeInfo[1],'targetWordIndex': shoeInfo[2]})
      }
    })
  })
  return lacedShoes
}


function areLacedLocation(shoeName){
  var arelaced = false
  var shoeNameFull = shoeName.split(' ')
  for(var i = 0; i < shoeNameFull.length; ++i){
    if(shoeNameFull[i] === 'lace-up' || shoeNameFull[i] === 'laced'){
      var lacedLocation = i
      var areLaced = true
    }
  }
  return [areLaced, shoeNameFull, lacedLocation]
}

function starLine(lineLength){
  var line = ''
  for(var i = 0; i < lineLength; ++i){
    line += '*'
  }
  return line
}
