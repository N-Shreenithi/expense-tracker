const http = require('http');
const caluculate = require("./calculator")

let sum=caluculate.add(5, 19)
let diff = caluculate.subtract(5, 19)
let prod = caluculate.multiply(5, 19)
let quoti = caluculate.divide(5, 19)

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("First number is 10\nSecond number is 20\n" + "\nSum is: " + sum.toString() + "\nDifference is: " + diff.toString() +  "\nProduct is: "+ prod.toString() +"\nQuotient is: "+quoti.toString());
});

server.listen(3000, ()=> {
    console.log("Server running at http://127.0.0.1:3000/");
});


console.log("First number is 10\nSecond number is 20\n")
console.log("Sum is: ", caluculate.add(5, 19))
console.log("Difference is: ", caluculate.subtract(5, 19))
console.log("Product is: ", caluculate.multiply(5, 19))
console.log("Quotient is: ", caluculate.divide(5, 19))

const fs = require('fs')

fs.readFile('sample.txt', "utf8" , (err, data) => {
    if(err) {
        console.log(err)
        return
    } else {
        console.log(data)
    }
})

fs.writeFile('sample.txt', "hello world", (err, data)=>{

})

const json = Js