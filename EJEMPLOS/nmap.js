const  {exec} = require('child_process');

/*
exec('nmap osweekends.com', (err, stdout, stderr) => {
  if(!err){  
      console.log('RESPUESTA:', stdout)
  } else {
      console.log('Error: '+err)
  }
})
*/
exec('python3 fichero.py', (err, stdout, stderr) => {
    if(!err){  
        console.log('RESPUESTA:', stdout)
    } else {
        console.log('Error: '+err)
    }
  })