function reverse(input){
  if(!input || input.length < 2 || typeof input !== 'string'){
    return 'fuddu input';
  }
  const backwards = [];
  //we can either use split to convert string to array or directly use //string as an array in js 
  const total = input.length - 1;
   console.log(total)
  for(let i = total; i >= 0; i-- ){
    backwards.push(input[i]);
  } 
  console.log(backwards)
  return backwards.join('')
}

reverse('gagan is a great codeer')

function reverse2(input){
  return input.split('').reverse().join('')
  }

const reverse3 = input => input.split('').reverse().join('');

const reverse4 = input => [...input].reverse().join('');