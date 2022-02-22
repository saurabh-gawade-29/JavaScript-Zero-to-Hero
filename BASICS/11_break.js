/*
The break statement, 
which was briefly introduced with the switch statement,
*is used to exit a loop early, 
*breaking out of the enclosing curly braces.
 */

var count = 0;

while(count < 10){
    console.log("Currunt Count: "+count);
    count++;

    if(count == 5){
        console.log("Value  Matched to Break Statment: " +count);
        break;
    }
}




