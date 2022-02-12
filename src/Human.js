import Animal from "./Animal";

export default class Human extends Animal {
  constructor(age, gender, name, profession) {
    super(age, gender, name);
    this.profession = profession;
  }
  drive(origin, destination) {
    console.log(`from ${origin} to ${destination}`);
  }
}
