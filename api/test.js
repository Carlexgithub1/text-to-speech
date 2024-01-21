const { v4: uuidV4 } = require("uuid");

function test1() {
    const id = uuidV4();
    console.log(id);
}

function test2() {
    let output;
    try {
        output = 15;
    } catch (error) {
        return
    }
    console.log(output);
}

test2()
