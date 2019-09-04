function Stu(name) {
  // _name表示这是一个内部变量，不要从外部访问（虽然可以访问到）
  this._name = name;
}

Stu.prototype = {
  constructor: Stu,

  // 因为，我们不希望外部直接访问内部变量，这就是我们为什么用get set
  // 用get、set表示Name只是一个属性
  get Name() {
    return this._name;
  },

  // 用get、set的好处是，我们可以对输入的值进行判断
  // 例如输入的是一个空字符串，那么就不会对_name重新复制
  set Name(val) {
    if(val) {
      this._name = val;
    }
  }
};

// 先new一个Stu实例
let s = new Stu('Simon');
console.log('Initial name: ', s.Name);

// 用get、set去修改构造函数中的内部变量
s.Name = 'Simonx';
console.log('The changed name: ', s.Name);

// 如果是空，_name将不会改变。返回上一步的名字
s.Name = '';
console.log('Set name to null, the name still should be "Simonx"', s.Name);