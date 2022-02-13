export default class Animal {
  constructor(age, gender, name) {
    typeof age === "number" ? (this.age = age) : (this.age = 0);
    typeof gender === "string" ? (this.gender = gender) : (this.gender = null);
    typeof name === "string" ? (this.name = name) : (this.name = null);
  }
  static run() {
    console.log("running");
  }
}
