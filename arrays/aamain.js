class MyArray{
  constructor(){
    this.length = 0;
    this.data = {};
  }
  get(index){
    return this.data[index]
  }
}

const one = new MyArray();
console.log(one.get(0))