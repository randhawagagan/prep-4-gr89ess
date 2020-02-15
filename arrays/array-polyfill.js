class MyArray{
  constructor(){
    this.length = 0;
    this.data = {};
  }
  get(index){
    return this.data[index]
  }
  push(item){
    this.data[this.length] = item;
    this.length++;
  return this.length;
  }
  pop(){
    const lastitem = this.data[this.length - 1];
    delete this.data[this.length - 1]
    this.length--;
    return lastitem
  }
  delete(index){
    const item = this.data[index];
    this.shiftItems(index)
  }
  shiftItems(index){
    for(let i=index;i<this.length - 1; i++){
      this.data[i] = this.data[i+1]
    }
    delete this.data[this.length - 1]
    this.length--;
  }
}

const one = new MyArray();
one.push('gagan')
one.push('nav')
one.push('jot')
one.delete(1)
console.log(one)