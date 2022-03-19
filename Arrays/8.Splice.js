// *** Splice Method ***
//TODO: Splice(start Number, delete count, "string")

const months = ["jan", "feb", "mar", "apr", "may"];

//? 1. dec add at the end
// const newMonths = months.splice(months.lenght, 0, "DEC");
// console.log(months);

// return a blank array[] coz we not delete anything from the array
// console.log(newMonths);

//? upate the month
const monthIndex = months.indexOf("mar")
// update : conditon coz indexOf return -1 when value is not matched
if (monthIndex != -1){
    const updateMonth = months.splice(monthIndex, 1, "Mar");
    console.log(updateMonth);
}
console.log(months);


// ? Delete jun form array
const deleteMonth = months.splice(monthIndex, Infinity);
console.log(months);
