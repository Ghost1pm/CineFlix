const jsonServer = require('json-server');
const server = jsonServer.create();

const router = jsonServer.router('./DataBase/item.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001
server.use(middlewares);

server.use((req,res,next)=>{
    next()
})

server.use(router);

server.listen(port, ()=>console.log("Json server is started on POST 3000"))




