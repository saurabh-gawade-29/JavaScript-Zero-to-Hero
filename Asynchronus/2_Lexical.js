let a = "I Am A";  //Global Scope

const first = () => {
    let b = "I Am B";

    const second = () => {
        let c = "I Am C";
        console.log("Console log in Second : " + a + b + c)
    }
    second();
    // !You will get error for below.
    // console.log("Console log in Outside Second" + a + b + c)
}
first();