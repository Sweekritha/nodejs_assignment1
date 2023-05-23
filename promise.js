let pro = new Promise((resolve, reject) => {
    let num = 10
    if(num==10){
        resolve("Success")
    }
    else{
        reject("Failed")
    }
})
pro.then((message)=>{
    console.log(message)
}).catch((message)=> {
    console.log(message)
})