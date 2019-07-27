/*  ----- callbacks ----*/ 
function sleep (callback) {
    setTimeout(() => {
        console.log("Hola mundo");
        callback()
    }, 1000);
}
/*
console.log("---- inicio ----")

sleep(function () {
    console.log("---- fin -----")
})
*/



/* ---- PROMSESAS ---- */
function sleepPromise (callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hola mundo");
            resolve()
        }, 1000);
    })

}

console.log("---- inicio ----")

sleepPromise()
    .then(sleepPromise)
    .then(function () {
        console.log("---- fin -----")
    })
