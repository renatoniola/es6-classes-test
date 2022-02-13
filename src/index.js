import Animal from "./Animal";
import Human from "./Human";
import Feline from "./Feline";

let me = new Human(46, "male", "renato", "dev");
let cat = new Feline(3, "female", "kitty");

console.log(cat);
cat.pur();
console.log(me);
me.drive("amsterdam", "napoli");

// static mathod run.
Animal.run();
