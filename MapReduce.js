//map
let capitals=new Map() //empty map
capitals.set('bangalore','ka');
capitals.set('mumbai','mh');
//capitals.set('bangalore','kr');//no duplicate KV pairs are stored

console.log(capitals);
console.log(capitals.size);
console.log(capitals.keys())
console.log(capitals.values())
//console.log(capitals.get('bangalore'));
//console.log(capitals.has('mumb'));
 
//console.log(capitals)
//capitals.clear()
//console.log(capitals);

//let a=capitals.entries()
//console.log(a)

/*for(let[key,value] of capitals)
{
    console.log(key +" is capital of "+value)
}


let m1=new Map()
console.log(m1 instanceof Object)*/

//performance efficiency
/*let a=[],m=new Map()
let b=[1,2,3,45,6,7,8,9]
for(let i=0;i<b.length;i++){
    //console.time('Array')
    a.push(b[i])
    //onsole.timeEnd('Array')
    
    //console.time('Map')
    m.set(b[i])
    //console.timeEnd('Map')
    
}

console.log(a)
console.log(m)

/*let cap=new Map()
cap.set('kohli','india')
cap.set('morgan','england')
console.log(cap)

//Iteration of map using forEach
/*console.log("Using forEach() loop: ")
cap.forEach(function(value,key){console.log(key+" is the captain of team  "+value)})

let o=new Object()
console.log(o instanceof Map)

//adding objects to the map
/*let map=new Map()
let o1={name:'Adarsh'}
let o2={name:'Ashwini'}
map.set(o1,'Hegde')
map.set(o2,'Hegde')
console.log(map)
console.log(map.entries())*/