# workshop Node4hackers

Repositorio de trabajo del Workshop node4hackers

### Vídeo del evento

[![](http://img.youtube.com/vi/Lk0-14Xwjo0/0.jpg)](http://www.youtube.com/watch?v=Lk0-14Xwjo0)

**[índice de contenido en el vídeo](http://www.youtube.com/watch?v=Lk0-14Xwjo0)**
- Intro: 0:00 - 04:40
- Consola y termina : 04:40 - 07:00
- Asincronía: 07:00 - 19:00
- Servidor HTTP (sin librerías): 19:00 - 27:50
- Gestión de ficheros (nativo): 27:50 - 35:30
- Eventos en Nodejs: 35:30 - 42:38
- Variables de entorno: 42:38 - 45:05
- Procesos hijo en Node.js: 45:05 - 01:11:00
- Express y TOR Proxy: 01:11:00 - 01:40:20
- _Descanso:  01:40:20 - 01:40:40_
- Planificación de la parte 2: 01:40:40 - 01:42:56
- Condensando decenas de peticiones HTTP con Express:  01:42:56 - 02:04:40
- Analizar IPs de Tor y Nodos: 02:04:40 - 02:36:00
- Scraping: 02:36:00 - 03:07:13

**[Hilo de debate en Twitter](https://twitter.com/kom_256/status/1151540430317740033)**

### Antes del evento

- Debes instalar Node [(Pasos y documentación)](https://nodejs.org/es/download/)
- Debes instalar Docker [(Pasos y documentación)](https://docs.docker.com/install/)
- En general no existe problema por usar cualquier sistema operativo, pero algunas librerías de terceros (que podríamos usar) solo las he probado en Linux/OSX, pero esto no será un problema para disfrutar el taller en cualquier caso :-)
- Prevemos tener problemas de conectividad por lo que deberíais hacer los siguientes pasos:
  - Clonaros este repositorio en el equipo que useis durante el taller `$ git clone https://github.com/UlisesGascon/workshop-node4hackers`
  - Entrar en la carpeta del repositorio clonado `$ cd workshop-node4hackers`
  - Instalar las dependencias que podríamos usar `$ npm install`, esto debería generaros una carpeta (muy pesada) `/node_modules` y mostraros mucha información por la terminal (incluyendo warnings) esto es "normal" y hablaremos de ello en durante el taller
  - Nos bajamos la imagen de docker de [osminogin/tor-simple](https://hub.docker.com/r/osminogin/tor-simple/) con el siguiente comando: `$ docker pull osminogin/tor-simple`
- Con todo esto... ¡ya estás listo para el workshop!

### Durante el evento

- Seguramente tengamos baja conectividad y seamos muchas personas, es importante ser paciente
- Es normal perderse, para evitar esto cada pocos minutos iré subiendo lo que estoy haciendo al repositorio de github. Podras re-engancharte siplemente haciendo `git pull origin master` en la consola. Ya que esto te traerá todos los cambios :-)
- Si ves que puedes ayudar a otras personas, es una gran oportundiad que no deberias dejar pasar. Somos una comunidad princpalmente porque nos apoyamos entre todos y todas ^^.
- Muchas cosas las decidiremos al empezar (descansos, etc..)
- Si tienes una duda o quieres aportar algo, no dudes en hacerlo.
- Yo intentaré grabar la sesión con lo que no será tan crítico que sigas mis pasos e intentes replicar lo que hago en tiempo real porque luego tendrás el video para verlo todo de nuevo y rebobinar las veces que necesites. Recuerda que también voy subiendo el código cada poquito tiempo.
- Mi objetivo como ponente es facilitaros todo lo que hago durante el taller con lo que tendréis todo el material, recursos, links, código, etc... asi te quitamos esa presión y puedes disfrutar mucho más de la experiencia ;-)

### Después del evento
- Los PRs son super bienvenidos!
- Puedes entrar en este repo y usar el código como quieras, recuerda que este repo tiene una licencia AGPLv3.
