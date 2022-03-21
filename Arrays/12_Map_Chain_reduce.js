let arr = [2, 3, 4, 6, 8];
// ! Add reduce :: Professional Approch
//* 1: we multiply with 2
let newArr = arr
.map((element) => {
    return element * 2;
  })
  .filter((element) => {
    return element > 10;
  }).reduce(
      (previouseValue, element)=>{
        return previouseValue += element
      }
  );
//   TODO: we can add one method to other i.e =>  map + filter
//* 2: we can apply one conditon here which is > 10
console.log(newArr);
