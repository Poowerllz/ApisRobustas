import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import TaskController from './app/controllers/TaskController';

import authMiddlewares from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);



// todas as rotas abaixo desta linha necessitam autenticação via token
routes.use(authMiddlewares);
routes.put('/users' ,UserController.update);

 routes.post('/tasks', TaskController.store);
 routes.get('/tasks', TaskController.index);
 routes.get('/tasks/:task_id', TaskController.update);
 routes.delete('/tasks/:task_id', TaskController.delete);

export default routes;
