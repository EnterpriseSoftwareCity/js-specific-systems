const callbackImplementationExample = (callback: (message: string) => void, errorCallback: (message: string) => void) => {
    const operation: boolean = false;

    if (operation) {
        callback("Operation Executed Successfully");
    } else {
        errorCallback("Operation Failed");
    }
};

callbackImplementationExample((message) => {
    console.log(message);
}, (message) => {
    console.error(message);
});