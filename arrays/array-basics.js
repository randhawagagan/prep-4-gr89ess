const st = ['1', '2', '3']
st.push('s'); //O(1)
console.log(st)
st.pop(); //O(1)
console.log(st)
st.unshift('d'); //O(n)
console.log(st)

st[2]

st.splice(1,0,'fafaf'); //O(n/2) --> O(n) // insert or 
//delete st.splice(1,1);
// splice (startindex, deletenum, addedarray)
console.log(st)