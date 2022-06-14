const Hapi = require('@hapi/hapi');
const routes = require('./routes');


const init = async () => {
  server.route(routes);
 
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

const server = Hapi.server({
  port: 5000,
  host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
  routes: {
    cors: {
      origin: ['*'],
    },
  },
});


init();