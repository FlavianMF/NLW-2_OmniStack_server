import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
app.use(cors());
app.use(express.json());

/*
GET -> Buscar Algo
POST -> Criar algo
PUT -> Atualizar
DELETE -> Deletar
*/
/*
Parametros por
Corpo -> request.body
Rout Params:
Query Params:
*/

app.use(routes);

app.listen(3333);