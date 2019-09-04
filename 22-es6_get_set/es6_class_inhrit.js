class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  show() {
    console.log("name and age: ", this.name, this.age);
  }
}

class Student extends Human {
  constructor(name, age, classNum) {
    // 子类对象的构造需要通过父类执行构造函数的构造过程
    // 调用父类构造函数
    super(name, age);
    // 子类设置自己的属性
    this.classNum = classNum;
  }

  showStu() {
    console.log("name，age and class number: ", this.name, this.age, this.classNum);
  }
}

let stu = new Student('Simon', 28, 'EE854');
stu.show();
stu.showStu();