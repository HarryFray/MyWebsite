var dogs = 2
switch (dogs){
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  console.log('only ' + dogs +'!');break;
  case 6:
  console.log('half o-12 pack o-puppers');
}

var x = 1;

while ( x <= 20) {
    if (x % 3 == 0){
        console.log('Julia')
    }else if(x % 5 == 0){
        console.log('Nick')
    }else if(x % 3 == 0 && x % 5 == 0){
        console.log('JuliaNick')
    }else{
        console.log(x)
    }
    var x = x + 1
  }





  function makeLine(length) {
      var line = "";
      for (var j = 1; j <= length; j++) {
          line += "* ";
      }
      return line + "\n";
  }

  // your code goes here.  Make sure you call makeLine() in your own code.
  function buildTriangle(ww){
      for (var i = 1; i < ww; i++){
         makeLine(i);
      }
  }

  // test your code by uncommenting the following line
  console.log(buildTriangle(10));




var sports = function(balls){
  var ball = balls**2
  return ball
}

sports(10)

var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

// your code goes here
for(c=0; c < numbers.length(); ++c){
    console.log(numbers[c])
}

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function printAccountSummary(){
        return 'your balance is currently ' + savingsAccount.balance + ' and your interest rate is '+ savingsAccount.interestRatePercent +'%'

    }
};

console.log(savingsAccount.printAccountSummary());



var facebookProfile ={
    name:'nick',
    friends:14,
    messages:['pumped for weekedn','shit is wack out here','honeys are fly today!'],
    postMessage: function(post){
        return facebookProfile.messages.push(post)},
    deleteMessage: function(index){
        return facebookProfile.message.splice(index,1)},
    addFriend: function(){
        return ++facebookProfile.friends},
    removeFriend: function(){
        --facebookProfile.friends}
};
