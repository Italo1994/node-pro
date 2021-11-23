import express, { Request, Response, NextFunction } from 'express';
import usersRouter from './routes/users.route';
import statusRouter from './routes/status.route';

const app = express();

// Configurações da Aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurações de Rotas
app.use(usersRouter);
app.use(statusRouter);

// Inicialização do Servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000');
});