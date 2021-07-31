const http = require('http');
const httpProxy = require('http-proxy');

const port = 80;

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  var dest={};
  console.log(req.headers.host);
  switch(req.headers.host){
    case 'www.kronecai.com':
      dest={target:'http://localhost:8080'};
      break;
    default:
      dest={target:'http://localhost:8082'};
  }

  proxy.web(req, res, dest);
});

server.listen(port, () => {
  console.log(`proxy server is running at http://localhost:${port}/`);
}); 