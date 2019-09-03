class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showStudent() {
    console.log(this.age, this.name);
  }
}

let stu = new Student('Shan', '3');

stu.showStudent();

