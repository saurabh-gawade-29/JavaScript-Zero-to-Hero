// Reduce Method():
//TODO: Flatten Array Means Convert 2D, 3D => 1D

let arr = [5, 6, 2];
let newArr = arr.reduce(
    (accumulator, element, index, arr)=>{
        return accumulator *= element  
    } // Accumulator : Previouse Value
)

console.log(newArr);