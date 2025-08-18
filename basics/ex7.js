let user ={
    name:"laasya",
    age:18,
    mymeth1: function(){
        console.log("hello1")
    },
    mymeth2(){
        console.log("hello2")
    }

}

user.mymeth3 = mymeth3
function mymeth3(){
    console.log("hellow3")

}

user.mymeth1()
user.mymeth2()
user.mymeth3()