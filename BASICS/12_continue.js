/*
The continue statement tells the interpreter to immediately 
start the next iteration of the loop and skip the remaining code block. 
When a continue statement is encountered, the program flow moves to the loop check expression immediately and if the condition remains true, 
then it starts the next iteration, otherwise the control comes out of the loop
*/

var count = 0;

while(count < 10){
    count = count + 1;

    if(count ==  5){
        continue; //! Skip at value 5 and rest body loop will be excuted
    }
    console.log("Currunt Count: "+ count + "<br/>");
}