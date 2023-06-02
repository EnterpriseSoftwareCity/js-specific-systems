const promiseOne: Promise<string> = new Promise((resolve) => {
    resolve("Promise One Success");
});

const promiseTwo: Promise<string> = new Promise((resolve) => {
    resolve("Promise One Success");
});

const promiseThree: Promise<string> = new Promise((resolve) => {
    resolve("Promise One Success");
});

Promise.all([
    promiseOne,
    promiseTwo,
    promiseThree
]).then((message) => {
    console.log(message);
})