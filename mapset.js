let types = new Map()
types.set('samsung', 'mobile')
types.set('kingfisher', 'beer')
types.set('ferrari','car')


a = types.entries()
console.log(a)
console.log(types.keys())
console.log(types.values())


console.log(types.get('bmw'))
console.log(types.has('mice'))

console.log(types.get('ferrari'))
console.log(types.has('dog'))

console.log(types.size)




console.log(types.entries())
for(let [key,value] of types)
console.log(key+ ' is a/an ' + value)


types.forEach((keys,values)=>{
    console.log(keys,values)
});