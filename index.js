const http = require('http')

const server = http.createServer();

let friends = [{
    id:0,
    name:"DK"
    },
   {
   id: 1,
   name: "Aadil"
   } ,
   {
       id:2,
       name:"imran"
   }

]

server.on('request',(req,res)=>{

    let routes = req.url.split('/')
    console.log(routes)
    if(routes[1]==='friend'){
      res.statusCode = 200
      res.setHeader('Content-type','application/json')
      if(routes.length===3){
          res.write(JSON.stringify(friends[routes[2]]))
      }
    }

    if(routes[1] === 'massege'){
        res.statusCode = 200
        res.setHeader('Content-type','text/html')
        res.write('<html><head></head><body><h1>Kya Hal Hai Bhai</h1></body></html>')
        res.end()
    }

    else{
        res.statusCode = 404
        res.end()
    }

})

server.listen(2000)

