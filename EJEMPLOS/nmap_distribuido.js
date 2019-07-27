const  {exec} = require('child_process');

function execPromise (dominio){
    return new Promise(function (resolve, reject) {
        exec(`nmap ${dominio}`, (err, stdout, stderr) => {
            if(err) {
               reject(err)
            } else {
                resolve(stdout, stderr)
            }
          })
    })
}


execPromise('hackmadrid.org')
    .then(function (stdout, stderr) {
        console.log('RESPUESTA:', stdout)
        console.log('RESPUESTA [stderr]:', stderr)
    })
    .catch(function (err) {
        console.log("SE ROMPIO!", err)
    })
