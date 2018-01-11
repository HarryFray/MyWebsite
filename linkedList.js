// Linked Lists


function LinkedList(){
  this.head = null;
}

LinkedList.prototype.isEmpty = function(){
  return this.head === null;
};

// [10] -> [20] -> [30] -> null

LinkedList.prototype.size = function(){
  var current = this.head;
  var count = 0;

  while (current !== null){
    count++
    current = current.next
  }
  return count;
};

LinkedList.prototype.prepend = function(val){
  var newNode = {
    data: val,
    next: this.head
  };
  this.head = newNode
}

var llist = new LinkedList()
llist.prepend(10)
llist.prepend(8)
llist.prepend(6)
