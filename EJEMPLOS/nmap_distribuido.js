const  {exec} = require('child_process');

function execPromise (dominio){
    return new Promise(function (resolve, reject) {
        exec(`nmap ${dominio}`, (err, stdout, stderr) => {
            if(err) {
               reject(err)
            } else {
                resolve({stdout, stderr})
            }
          })
    })
}



Promise.all([execPromise('hackmadrid.org'), execPromise('osweekends.com'), execPromise('google.es')])
    .then(function (responses) {
        console.log('responses:', responses)
        /*
        const stdout = responses[0].stdout
        const stderr = responses[0].stderr

        console.log('RESPUESTA:', stdout)
        console.log('RESPUESTA [stderr]:', stderr)
        */
    })
    .catch(function (err) {
        console.log("SE ROMPIO!", err)
    })