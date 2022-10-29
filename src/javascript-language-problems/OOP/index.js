


class Potato {
  constructor(){
    this.someFunction = this.someFunction.bind2(this)
  }
  someFunction  (){
    console.log("this",this);
  }
}
let potato =  new Potato();
potato.someFunction();
