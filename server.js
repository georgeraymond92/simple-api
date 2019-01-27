'use strit';

const jsonServer = require('json-server');

const server = jsonServer.create();

const router  = jsonServer.router('./db/db.json');

const middlewares = jsonServer.defaults();

// {
//   count: 10,
//   results: [
//     {},
//     {},
//     {},
//     {}
//   ]
// }


router.render = (req,res) => {
  res.jsonp({
    count:res.laals.data.length,
    results:res.locals.data
  });
}

server.use(middlewares);
server.use(router);
server.listen(3000, () => console.log('listening on port 3000'));