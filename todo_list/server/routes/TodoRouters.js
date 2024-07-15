import express from 'express'
import {getTodos, saveTodo} from '../controller/TodoController'


const router = express.Router ();
router.get("/get", getTodos);
router.post("/save",saveTodo);

module.exports = router;
export default router;
