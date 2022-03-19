//! *** TOO IMP*** filter()
//* Show all satisfied value 
//* better than find method
//* also return a callback function

const price = [100, 200, 300, 400, 500, 600];

const newVal = price.filter(
    (element)=>{
        return element < 400; 
    }
)

console.log(newVal);