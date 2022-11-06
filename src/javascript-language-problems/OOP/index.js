
import { initEmployeeRelatedFunction } from "./Employee"
import { objectCreate } from "./Object"

// class Potato {
//   constructor() {
//     this.someFunction = this.someFunction.bind2(this)
//   }
//   someFunction() {
//     console.log("this", this);
//   }
// }
// let potato = new Potato();
// potato.someFunction();


export const init_OOP = () => {
  objectCreate();
  initEmployeeRelatedFunction()

}