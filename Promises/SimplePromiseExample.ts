const operation: Promise<string> = new Promise((resolve, reject) => {
    const operation: boolean = true;

    if (operation) {
        resolve("Operation Executed Successfully");
    } else {
        reject("Operation Failed");
    }
});

operation.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});


