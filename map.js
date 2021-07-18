
const map = new Map()
map.set('paneer masala', 50); map.set('chicken masala', 120); map.set('paneer kadhai', 50)  
console.log(map)
let arr = Array.from(map)
console.log(arr)


let m = new Map()
console.log(m instanceof Map)
console.log(m instanceof Object)
console.log(m instanceof Set)


let ob1 = {
    id: '1', name:'Abhay', phone:'9004'
}
function mapcreate(ob1){
    let mp = new Map()
    Object.keys(ob1).forEach(key=>{
        mp.set(key, ob1[key]);
    });
    console.log(mp)
    console.log(mp.entries())
}
mapcreate(ob1)


console.time('Map')
map.forEach((value,key)=>{
    console.log(key, value)
});
console.timeEnd('Map')

let a = ['paneer masala', 'chicken masala', 'paneer kadhai']
console.time('Array')
a.forEach(item=>{
    console.log(item)
})
console.timeEnd('Array')
