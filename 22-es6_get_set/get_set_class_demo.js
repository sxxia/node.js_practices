class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showStudent() {
    console.log(this.age, this.name);
  }

  get Name() {
    return this.name;
  }

  set Name(val) {
    this.name = val || 'null';
  }
}

let stu = new Student('Simon', '28');
stu.showStudent();

// 用get set设置类构造器中的名字
stu.Name = 'Simonx';
stu.showStudent();

stu.Name = '';
stu.showStudent();