import express, { request, response } from 'express';
import ClassesController from '../src/controllers/ClassesController';

const routes = express.Router();
const classesController = new ClassesController();

routes.post('/classes', classesController.create);

export default routes;