let user={
    name:"laasya",
    year:"2024",
    age :{
        a:18,
        b:19
    }
}

console.log(user.name)
let user2 = user //copy by reference
console.log(user2)
let newuser = Object.assign({},user)//copy by value but not for nested objects
newuser.age.a = 90
console.log(newuser)
console.log(user)
newuser.name = "parnika"
console.log(user)
console.log(newuser)
let newuser2 = structuredClone(user)//copy value even for nested objects
newuser2.name ="sarvani"
newuser.age.b = 23
console.log(newuser2)
console.log(user)