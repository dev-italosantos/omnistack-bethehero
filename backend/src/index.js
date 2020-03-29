const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/*
    Rota / Recursos
*/

/*
    Métodos HTTP:

    GET: Buscar/listar uma informação do back-end
    POST: Criar uma informação no back-end
    PUT: Alterar uma informação no back-end
    DELETE: Deletar uma informação no back-end
*/

/*
    Tipos de Parâmetros:

    Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação)
    Route Params: Parâmetros ultilizados para identificar recursos
    Request Body: Corpo da requisição, ultilizado para criar ou alterar recursos
*/

/*
    SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    NoSQL: MongoDB, CouchDB, etc.
*/

/*
    DRIVER: Select * form users;
    Query Biulder: tables('users').select(*); 
*/
