a = ["a","b","c","d"]
console.log(a[1])
a1 = a 
a1[3] = 3
console.log(a1)
console.log(a)//copies by references
a[0] = ["A","B","C"]
console.log(a)
//copies by value
a2 = structuredClone(a)
a2[0][0] = "laasya"
console.log(a2)
console.log(a)