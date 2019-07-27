function sleep (callback) {
    setTimeout(() => {
        console.log("Hola mundo");
        callback()
    }, 1000);
}

console.log("---- inicio ----")

sleep(function () {
    console.log("---- fin -----")
})
