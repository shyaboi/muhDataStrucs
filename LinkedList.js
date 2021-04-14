class LinkedList {
    //optional head and tail given and made into node objects
  constructor(head = null, tail = null) {

    if (head && tail) {
        this.tail = {value:tail, next:null};
        this.head = {value:head, next:this.tail};
    } else if (head) {
        this.head = {value:head, next:null}
        this.tail = {value:head, next:null}
    } else {
      this.head = null;
      this.tail = null;
    }

}

  append(val) {
    const new_node = { value: val, next: null };
    if (this.tail) {
      this.tail.next = new_node;
      this.tail = new_node;
    }
    if (!this.head) {
      this.head = new_node;
    }
    if (!this.tail) {
      this.tail = new_node;
    }
  }

  prepend(val) {
    const new_node = { value: val, next: null };
    if (this.head) {
      new_node.next = this.head;
      this.head = new_node;
    }
    if (!this.head) {
      this.head = new_node;
    }
    if (!this.tail) {
      this.tail = new_node;
    }
  }

  find_one(val) {
    let current_node = this.head;
    while (current_node) {
      if (val === current_node.value) {
       console.log('found a match')
       return(current_node)
      }
      current_node = current_node.next;
    }
     return('no match found')
  }

  print_list() {
    let current_node = this.head;
    while (current_node) {
      console.log(current_node.value);
      current_node = current_node.next;
    }
  }

  to_array() {
    let current_node = this.head;
    let print_array = [];
    while (current_node) {
      print_array.push(current_node.value);
      current_node = current_node.next;
    }
    console.log(print_array);
  }


}

let ok = new LinkedList();

ok.append(3)
ok.append(37)
ok.prepend(5)
ok.prepend(33)

// ok.to_array();
// ok.print_list();
console.log(ok.find_one(5))
