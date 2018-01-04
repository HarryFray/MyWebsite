var numbers = [1,2,3,4,5,6]
var tar = 9

var twoSum = function(nums, target){
  var indeces = []
  nums.map(function(numA, indexA){
    nums.map(function(numB, indexB){
      if(numA + numB === target && indexA !== indexB){
        indeces[0] = indexA
        indeces[1] = indexB
      }
    })
  })
  return indeces
}

/////////////////
var lengthOfLongestSubstring = function(s) {
    var string = ''
    var subStrings = [s[0]]
    var letters = s.split('')
    letters.map(function(letter, index, array){
      debugger;
      if(isNotRepeatChar(string,letter)){
        string += letter
      }else{
        subStrings.push(string)
        string = letter
      }
    })
return longestSubStringLength(subStrings)
};


function longestSubStringLength(subStrings){
  var longest = 0
  subStrings.forEach(function(string){
    if(string.length > longest){
      longest = string.length
    }
  })
  return longest
}

function isNotRepeatChar(string, letter){
  var letters = string.split('')
  for(var i = 0; i < letters.length; ++i){
    if(letter === letters[i]){
      return false
    }
  }
  return true
}
