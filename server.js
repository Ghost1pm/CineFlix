const jsonServer = require('json-server');
const server = jsonServer.create();

const router = jsonServer.router('./DataBase/item.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req,res,next)=>{
    next()
})

server.use(router);

server.listen(3000, ()=>console.log("Json server is started on POST 3000"))




