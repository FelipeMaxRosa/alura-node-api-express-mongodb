const http = require('http');
const port = 3000;

const routes = {
  '/': 'Curso de Node',
  '/livros': 'Entrei na Pagina de Livros',
  '/autores': 'Listagem de Autores',
  '/editora': 'Pagina de Editora',
  '/sobre': 'Informacao sobre o projeto'
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(routes[req.url]);
});

server.listen(port, () => { 
  console.log(`Server running on http://localhost:${port}`);
});